import "./globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/components/NextAuthProvider";
import PlausibleProvider from "next-plausible";
import { siteConfig } from "@/config/siteConfig";
import { Toaster } from "react-hot-toast";

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
      <head>
        <PlausibleProvider domain="gonurselist.com" trackOutboundLinks={true} />
      </head>
      <body className="relative">
        <NextAuthProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
