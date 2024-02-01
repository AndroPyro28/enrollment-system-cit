import { userAllowedFields } from "@/schema/base";
import prisma from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { NextResponse } from "next/server";
import { UpdatePrincipalSchema } from "@/schema/principal";

/* 
  GET CURRENT PRINCIPAL

  METHOD: PATCH
  ROUTE: /api/principal
*/
export const GET = withAuth(
  async ({ req, session, params }) => {
    try {
      const principal = await prisma.user.findFirst({
        where: {
          is_principal: true,
        },
        select: {
          ...userAllowedFields,
          profile: true,
        },
      });

      return NextResponse.json(principal, { status: 200 });
    } catch (error) {
      console.log("[PRINCIPAL-ID-GET]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  },
  {
    requiredRole: ["admin"],
  }
);
/* 
  CHANGE PRINCIPAL

  METHOD: PATCH
  ROUTE: /api/principal
*/
export const PATCH = withAuth(
  async ({ req, session }) => {
    const body = await UpdatePrincipalSchema.safeParseAsync(await req.json());

    if (!body.success) {
      return NextResponse.json(
        {
          errors: body.error.flatten().fieldErrors,
          message: "Invalid body parameters",
        },
        { status: 400 }
      );
    }

    // update previous principal
    await prisma.user.updateMany({
      where: {
        role: "teacher",
        is_principal: true,
      },
      data: {
        is_principal: false,
      },
    });

    try {
      // update new principal
      await prisma.user.update({
        where: {
          id: body.data.id,
        },
        data: {
          is_principal: true,
        },
      });

      return NextResponse.json("Principal successfully changed", {
        status: 201,
      });
    } catch (error) {
      console.log("[PRINCIPAL-PATCH]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  },
  {
    requiredRole: ["admin"],
  }
);
