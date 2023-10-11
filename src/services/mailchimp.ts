import mailchimp from "@mailchimp/mailchimp_marketing";

const mailchimpKey = process.env.MAILCHIMP_API_KEY || "";
const audienceId = "a3bf9e088d";

mailchimp.setConfig({
  apiKey: mailchimpKey,
  server: "us10",
});

export { audienceId, mailchimp };
