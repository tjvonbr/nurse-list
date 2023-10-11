import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createMailchimpRecordSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string(),
  tags: z.array(z.string()),
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
      ...(body.firstName &&
        body.lastName && {
          merge_fields: { FNAME: body.firstName, LNAME: body.lastName },
        }),
      tags: body.tags,
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
