import { db } from "@/lib/prisma";
import { Status } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createSchema = z.object({
  subject: z.string(),
  body: z.string(),
  userId: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const body = createSchema.parse(json);

    const featureRequest = await db.featureRequest.create({
      data: {
        subject: body.subject,
        body: body.body,
        status: Status.SUBMITTED,
        userId: body.userId,
      },
    });

    return NextResponse.json(featureRequest);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}
