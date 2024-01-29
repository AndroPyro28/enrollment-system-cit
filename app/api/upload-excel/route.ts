import { NextRequest, NextResponse } from "next/server";
import * as xlsx from "xlsx";
import { z } from "zod";
export async function POST(request: NextRequest) {
  // Define a Zod schema for the file type
  const ExcelFileSchema = z.object({
    name: z
      .string()
      .refine((value) => value.endsWith(".xlsx") || value.endsWith(".xls"), {
        message: "Uploaded file must be an Excel spreadsheet (.xlsx or .xls)",
      }),
  });

  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);

    const file = body.file;
    console.log("====================================");
    console.log(file);
    console.log("====================================");

    // Validate the file using the Zod schema
    const validatedFile = ExcelFileSchema.safeParse(file);

    if (!validatedFile.success) {
      return NextResponse.json(
        {
          error: validatedFile.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    // if (!(file instanceof File)) {
    //   return NextResponse.json(
    //     {
    //       error: "Uploaded file must be an Excel spreadsheet (.xlsx or .xls) 2",
    //     },
    //     { status: 400 }
    //   );
    // }

    const arrayBuffer = await new Response(file).arrayBuffer();
    const workbook = xlsx.read(new Uint8Array(arrayBuffer), { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    type Data = {
      del: string;
      wad: string;
      awd: string;
      "wa wa": string;
    };

    const data: Data[] = xlsx.utils.sheet_to_json(worksheet);

    // Process the data as needed
    console.log(data[0]["wa wa"]);
    console.log(data);

    return NextResponse.json({ message: "Upload success", data });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
