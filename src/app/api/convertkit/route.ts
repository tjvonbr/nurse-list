import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const addSubscriberSchema = z.object({
  email: z.string(),
});

const convertkitKey = process.env.CONVERTKIT_API_KEY || "";
const formId = process.env.CONVERTKIT_FORM_ID || "";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const body = addSubscriberSchema.parse(json);

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribed`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          api_key: convertkitKey,
          email: body.email,
        }),
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }
    console.log(error);
    return new NextResponse(null, { status: 500 });
  }
}
