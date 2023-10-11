import crypto from "crypto";
import mailchimp from "@mailchimp/mailchimp_marketing";

const mailchimpKey = process.env.MAILCHIMP_API_KEY || "";
const audienceId = "a3bf9e088d";

mailchimp.setConfig({
  apiKey: mailchimpKey,
  server: "us10",
});

export { audienceId, mailchimp };

export async function createListMember(params: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  const subscriberHash = crypto
    .createHash("md5")
    .update(params.email.toLowerCase())
    .digest("hex");

  const response = mailchimp.lists.updateListMember(
    audienceId,
    subscriberHash,
    {
      merge_fields: {
        FNAME: params.firstName,
        LNAME: params.lastName,
      },
    }
  );

  return response;
}
