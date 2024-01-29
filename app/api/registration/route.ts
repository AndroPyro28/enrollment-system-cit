import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: {} }) {
  try {
    return NextResponse.json("registration");
  } catch (error) {
    console.log("[PRE-REGISTRATION-POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
