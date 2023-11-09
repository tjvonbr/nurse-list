import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    // Log response data for testing purposes
    console.log(body.form_response.answers[4].number);

    const dbUser = await db.user.findFirst({
      where: {
        email: body.form_response.answers[0].text,
      },
    });

    // Find city.  Create if it doesn't exist.
    const dbCity = await db.city.upsert({
      where: {
        name: body.form_response.answers[1].text,
      },
      update: {},
      create: {
        name: body.form_response.answers[1].text,
      },
    });

    // Find hospital.  Create if it doesn't exist.
    const dbHospital = await db.hospital.upsert({
      where: {
        name: body.form_response.answers[3].text,
      },
      update: {},
      create: {
        name: body.form_response.answers[3].text,
      },
    });

    const response = await db.contractReview.create({
      data: {
        typeformId: body.form_response.form_id,
        formResponse: body.form_response,
        userId: dbUser ? dbUser.id : null,
        cityReview: {
          create: {
            cityId: dbCity.id,
            overallScore: body.form_response.answers[2].number,
            entertainmentScore: body.form_response.answers[6].number,
            easeOfHousingScore: body.form.answers[7].number,
          },
        },
        hospitalReview: {
          create: {
            hospitalId: dbHospital.id,
            overallScore: body.form_response.answers[4].number,
          },
        },
      },
    });

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(`Typeform webhook error: ${error}`, {
      status: 400,
    });
  }
}
