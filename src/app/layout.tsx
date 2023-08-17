"use client";

import { Session } from "next-auth";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import localFont from "next/font/local";

interface RootLayoutProps {
  children: React.ReactNode;
  session: Session;
}

const myFont = localFont({
  src: "./GTWalsheimPro-Regular.woff2",
  display: "swap",
});

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={myFont.className}>{children}</body>
        <Script
          defer
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
        />
        <Toaster position="bottom-right" />
      </html>
    </SessionProvider>
  );
}
