import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createMailchimpRecordSchema = z.object({
  email: z.string(),
});

const mailchimpKey = process.env.MAILCHIMP_API_KEY || "";
const audienceId = "a3bf9e088d";

mailchimp.setConfig({
  apiKey: mailchimpKey,
  server: "us10",
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const body = createMailchimpRecordSchema.parse(json);

    const response = await mailchimp.lists.addListMember(audienceId, {
      email_address: body.email,
      status: "subscribed",
    });

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    console.log(error);

    return new NextResponse(null, { status: 500 });
  }
}
