import { extractDataFromExcel } from "@/lib/excel";
import { userAllowedFields } from "@/schema/base";
import prisma from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import {
  ValidateTeachersSchema,
  TeacherT,
  FormUploadExcelTeachersSchema,
} from "@/schema/teacher";
import { NextResponse } from "next/server";
import {
  generateHashPassword,
  generatePassword,
} from "@/lib/generate-password";
import { generateEmail } from "@/lib/generate-email";

/* 
  GET TEACHERS

  METHOD: GET
  ROUTE: /api/teachers 
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
      const teachers: TeacherT[] = await prisma.user.findMany({
        where: {
          role: "teacher",
        },
        select: {
          ...userAllowedFields,
          profile: true,
        },
      });

      return NextResponse.json(teachers, { status: 200 });
    } catch (error) {
      console.log("[TEACHER_GET]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  },
  {
    requiredRole: ["admin", "teacher"],
  }
);

/* 
  UPLOAD TEACHERS EXCEL FORMAT
  First Name*	Last Name*  Middle Name*	Extension	  Date of Birth*	  Age*	    Gender*
  jhondel	    caranay	    delicona		              1/1/1990	        20        male

  METHOD: POST
  ROUTE: /api/teachers 
*/
export const POST = withAuth(
  async ({ req, session }) => {
    // get file from request body
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = body.file;

    // validate file
    const validatedFile = FormUploadExcelTeachersSchema.safeParse({
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

    const formattedData = data?.map((teacher: any) => {
      return {
        first_name: teacher["First Name"],
        last_name: teacher["Last Name"],
        middle_name: teacher["Middle Name"],
        extension: teacher["Extension"],
        dob: teacher["Date of Birth"],
        age: teacher["Age"],
        gender: teacher["Gender"],
      };
    });

    // validate data
    const validatedExcel = ValidateTeachersSchema.safeParse(formattedData);

    if (!validatedExcel.success) {
      return NextResponse.json(
        {
          error: validatedExcel.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const teachers = validatedExcel.data;
    console.log("🚀 ~ file: route.ts:119 ~ teachers:", teachers);

    try {
      // create all teachers
      await Promise.all(
        teachers.map(async (teacher) => {
          const password = generatePassword(teacher.first_name, teacher.dob);
          const hashedPassword = await generateHashPassword(password);
          const email = generateEmail(
            "teacher",
            teacher.first_name,
            teacher.last_name,
            teacher.dob
          );

          const createdTeacher = await prisma.profile.create({
            data: {
              first_name: teacher.first_name,
              last_name: teacher.last_name,
              middle_name: teacher.middle_name,
              extension: teacher.extension,
              dob: teacher.dob,
              gender: teacher.gender,
              age: teacher.age,
              user: {
                create: {
                  email: email,
                  hashedPassword: hashedPassword,
                  role: "teacher",
                },
              },
            },
          });

          return createdTeacher;
        })
      );

      return NextResponse.json("All teachers successfully created", {
        status: 201,
      });
    } catch (error) {
      console.log("[TEACHER-POST]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  },
  {
    requiredRole: ["admin"],
  }
);
