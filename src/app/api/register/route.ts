import { db } from "@/lib/prisma";
import { Status } from "@/types/feature-requests";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  city: z.string(),
  state: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const body = createSchema.parse(json);

    console.log("hello");
    const user = await db.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        city: body.city,
        state: body.state,
      },
    });

    console.log(user);

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}
