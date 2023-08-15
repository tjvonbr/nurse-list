import mailchimpClient from "@mailchimp/mailchimp_transactional";

export const mailchimp = mailchimpClient(
  process.env.MAIL_SERVER_PASSWORD ?? ""
);
