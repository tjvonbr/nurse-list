import { Client, LogLevel } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createRecruiterLeadSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});

const notionSecret = process.env.NOTION_APP_SECRET ?? "";
const notionId = process.env.NOTION_RECRUITER_DATABASE_ID ?? "";

const notion = new Client({
  auth: notionSecret,
  logLevel: LogLevel.DEBUG,
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const body = createRecruiterLeadSchema.parse(json);

    const fullName = body.firstName + " " + body.lastName;

    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: notionId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `${fullName}`,
              },
            },
          ],
        },
        Email: {
          type: "email",
          email: `${body.email}`,
        },
        "Form submitted": {
          type: "date",
          date: {
            start: new Date().toISOString(),
          },
        },
        Status: {
          status: {
            name: "Lead",
            color: "orange",
          },
        },
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}
