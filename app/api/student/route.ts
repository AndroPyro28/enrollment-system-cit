import { extractDataFromExcel } from "@/lib/excel";
import { userAllowedFields } from "@/schema/base";
import prisma from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { NextResponse } from "next/server";
import {
  generateHashPassword,
  generatePassword,
} from "@/lib/generate-password";
import { generateEmail } from "@/lib/generate-email";
import {
  FormUploadExcelStudentsSchema,
  StudentT,
  ValidateStudentsSchema,
} from "@/schema/students";
import { calculateAge } from "@/lib/calculateAge";

/* 
  GET STUDENTS

  METHOD: GET
  ROUTE: /api/students 
*/
export const GET = withAuth(
  async ({ req, session, params }) => {
    // const QuerySchema = z.object({
    //   userId: z.string().optional(),
    // });

    // const queries = QuerySchema.safeParse(params);

    // if (!queries.success) {
    //   return NextResponse.json(
    //     {
    //       errors: queries.error.flatten().fieldErrors,
    //       message: "Invalid query parameters",
    //     },
    //     { status: 400 }
    //   );
    // }

    try {
      const students: StudentT[] = await prisma.user.findMany({
        where: {
          role: "student",
        },
        select: {
          ...userAllowedFields,
          profile: true,
        },
      });

      return NextResponse.json(students, { status: 200 });
    } catch (error) {
      console.log("[STUDENT_GET]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  },
  {
    requiredRole: ["admin"],
  }
);

/* 
  UPLOAD STUDENTS EXCEL FORMAT
  First Name* |	Last Name* | Middle Name* | Extension | Date of Birth* | Gender*

  METHOD: POST
  ROUTE: /api/students 
*/
export const POST = withAuth(
  async ({ req, session }) => {
    // get file from request body
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = body.file;

    // validate file
    const validatedFile = FormUploadExcelStudentsSchema.safeParse({
      file: file,
    });

    if (!validatedFile.success) {
      return NextResponse.json(
        {
          error: validatedFile.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = await extractDataFromExcel(file);
    console.log("🚀 ~ file: route.ts:93 ~ data:", data);

    const formattedData = data?.map((student: any) => {
      return {
        first_name: student["First Name"],
        last_name: student["Last Name"],
        middle_name: student["Middle Name"],
        extension: student["Extension"],
        dob: student["Date of Birth"],
        age: student["Age"],
        gender: student["Gender"],
      };
    });

    // validate data
    const validatedExcel = ValidateStudentsSchema.safeParse(formattedData);

    if (!validatedExcel.success) {
      return NextResponse.json(
        {
          error: validatedExcel.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const students = validatedExcel.data;
    console.log("🚀 ~ file: route.ts:119 ~ students:", students);

    try {
      // create all students
      await Promise.all(
        students.map(async (student) => {
          const password = generatePassword(student.first_name, student.dob);
          const hashedPassword = await generateHashPassword(password);
          const email = generateEmail(
            "student",
            student.first_name,
            student.last_name,
            student.dob
          );

          const createdStudent = await prisma.profile.create({
            data: {
              first_name: student.first_name,
              last_name: student.last_name,
              middle_name: student.middle_name,
              extension: student.extension,
              dob: student.dob,
              gender: student.gender,
              age: calculateAge(student.dob),
              user: {
                create: {
                  email: email,
                  hashedPassword: hashedPassword,
                  role: "student",
                },
              },
            },
          });

          return createdStudent;
        })
      );

      return NextResponse.json("All students successfully created", {
        status: 201,
      });
    } catch (error) {
      console.log("[STUDENT-POST]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  },
  {
    requiredRole: ["admin"],
  }
);
