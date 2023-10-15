import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    await db.contractReview.create({
      data: {
        formResponse: body.form_response,
      },
    });

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return new NextResponse(`Typeform webhook error: ${error}`, {
      status: 400,
    });
  }
}
