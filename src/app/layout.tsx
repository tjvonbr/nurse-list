"use client";

import { Session } from "next-auth";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  session: Session;
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
        <Toaster position="bottom-right" />
      </html>
    </SessionProvider>
  );
}
