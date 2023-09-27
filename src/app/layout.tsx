"use client";

import { Session } from "next-auth";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
  session: Session;
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          {children}
          <Toaster position="bottom-right" />
        </body>
      </html>
    </SessionProvider>
  );
}
