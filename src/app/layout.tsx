import "./globals.css";
import { Metadata } from "next";
import NextAuthProvider from "@/components/NextAuthProvider";
import { siteConfig } from "@/config/siteConfig";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
