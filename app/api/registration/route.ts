import prisma from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { NextRequest, NextResponse } from "next/server";

import { CreateRegistrationFormSchema } from "@/schema/registrations";
import { z } from "zod";
/* 
  GET ALl LIST OF REGISTRATIONS

  METHOD: GET
  ROUTE: /api/registration 
*/
export const GET = withAuth(
  async ({ req, session, params }) => {
    const QuerySchema = z.object({
      first_name: z.string().optional(),
      middle_name: z.string().optional(),
      last_name: z.string().optional(),
    });

    const queries = QuerySchema.safeParse(params);

    if (!queries.success) {
      return NextResponse.json(
        {
          errors: queries.error.flatten().fieldErrors,
          message: "Invalid query parameters",
        },
        { status: 400 }
      );
    }

    try {
      const registrations = await prisma.registrationForm.findMany({
        where: {
          first_name: queries.data.first_name,
          middle_name: queries.data.middle_name,
          last_name: queries.data.last_name,
        },
      });

      return NextResponse.json(registrations, { status: 200 });
    } catch (error) {
      console.log("[VIEW_REGISTRATION_GET]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  },
  {
    requiredRole: ["admin", "student", "teacher"],
  }
);

/* 
  STUDENT REGISTRATION FORM

  METHOD: POST
  ROUTE: /api/registration
*/

export async function POST(req: NextRequest, { params }: { params: {} }) {
  try {
    const result = await CreateRegistrationFormSchema.safeParseAsync(
      await req.json()
    );

    if (!result.success) {
      console.log("[CREATE_REGISTRATION_POST]", result.error.errors);
      return NextResponse.json(
        {
          message: "Invalid body parameters",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const registrations = await prisma.registrationForm.create({
      data: {
        first_name: result.data.first_name,
        middle_name: result.data.middle_name,
        last_name: result.data.last_name,
        school_year: result.data.school_year,
        grade_level_to_enroll: result.data.grade_level_to_enroll,
        is_with_lrn: result.data.is_with_lrn,
        is_returnee: result.data.is_returnee,
        psa_birth_cert_no: result.data.psa_birth_cert_no,
        lrn_no: result.data.lrn_no,
        extension: result.data.extension,
        dob: result.data.dob,
        gender: result.data.gender,
        age: result.data.age,
        place_of_birth: result.data.place_of_birth,
        mother_tongue: result.data.mother_tongue,
        is_pc: result.data.is_pc,
        ipc_name: result.data.ipc_name,
        is_4ps: result.data.is_4ps,
        household_id_4ps: result.data.household_id_4ps,
        is_pwd: result.data.is_pwd,
        is_same_address: result.data.is_same_address,
        last_grade_level_complete: result.data.last_grade_level_complete,
        last_school_year_complete: result.data.last_school_year_complete,
        last_school_attended: result.data.last_school_attended,
        school_id: result.data.school_id,
        semester: result.data.semester,
        track: result.data.track,
        strand: result.data.strand,
        form137_url: result.data.form137_url,
        form137_id: result.data.form137_id,
        birth_cert_url: result.data.birth_cert_url,
        birth_cert_id: result.data.birth_cert_id,
        card_url: result.data.card_url,
        card_id: result.data.card_id,
        application_form_url: result.data.application_form_url,
        application_form_id: result.data.application_form_id,
        picture_url: result.data.picture_url,
        picture_id: result.data.picture_id,
        qr_code_url: result.data.qr_code_url,
        qr_code_id: result.data.qr_code_id,
      },
    });

    // TODO: if is pwd, create disability record

    // TODO: if address is same, create address record for permanent and present

    // TODO: create preferred_learning_modalities record

    return NextResponse.json("Registration form submitted", { status: 200 });
  } catch (error) {
    console.log("[CREATE_REGISTRATION_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
