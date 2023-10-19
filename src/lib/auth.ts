import { Client } from "postmark";
import { db } from "./prisma";
import { DefaultUser, NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { siteConfig } from "@/config/siteConfig";

export interface IUser extends DefaultUser {
  firstName?: string;
  lastName?: string;
}

declare module "next-auth" {
  interface User extends IUser {}
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  // eslint-disable-next-line no-unused-vars
  interface JWT extends IUser {}
}

const THIRTY_DAYS = 60 * 60 * 24 * 30;
const THIRTY_MINUTES = 60 * 30;

const postmarkToken = process.env.POSTMARK_API_TOKEN || "";
const postmarkClient = new Client(postmarkToken);

const signInTemplateId = process.env.POSTMARK_SIGNIN_TEMPLATE_ID || "";
const welcomeTemplateId = process.env.POSTMARK_WELCOME_TEMPLATE_ID || "";
const nextAuthSecret = process.env.NEXTAUTH_SECRET || "";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as any,
  session: {
    strategy: "jwt",
    maxAge: THIRTY_DAYS,
    updateAge: THIRTY_MINUTES,
  },
  secret: nextAuthSecret,
  debug: true,
  pages: {
    signIn: "/login",
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
      sendVerificationRequest: async function ({ identifier, url, provider }) {
        const dbUser = await db.user.findUnique({
          where: {
            email: identifier,
          },
          select: {
            emailVerified: true,
          },
        });

        const templateId = dbUser?.emailVerified
          ? signInTemplateId
          : welcomeTemplateId;

        const result = await postmarkClient.sendEmailWithTemplate({
          TemplateId: parseInt(templateId),
          To: identifier,
          From: provider.from as string,
          TemplateModel: {
            action_url: url,
            product_name: siteConfig.name,
          },
          Headers: [
            {
              // Set this to prevent Gmail from threading emails.
              // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
              Name: "X-Entity-Ref-ID",
              Value: new Date().getTime() + "",
            },
          ],
        });

        if (result.ErrorCode) {
          throw new Error(result.Message);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
