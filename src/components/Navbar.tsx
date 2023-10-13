"use client";

import { navigationItems } from "@/config/navigation";
import Link from "next/link";
import NurseListLogo from "./NurseListLogo";

export default function Navbar() {
  return (
    <header className="w-full px-10 flex justify-between items-center">
      <div className="flex items-center space-x-10">
        <div className="flex items-center">
          <NurseListLogo />
          <Link className="text-xl text-black font-bold" href="/">
            NurseList
          </Link>
        </div>
        <nav className="hidden sm:flex space-x-10">
          {navigationItems.marketing.map((item, idx) => {
            return (
              <Link
                key={idx}
                className="text-sm text-black hover:text-slate-600 font-semibold transition-colors"
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="/login"
          className="h-9 px-3 flex justify-center items-center border border-slate-300 bg-transparent hover:bg-slate-50 transition-colors rounded-md text-sm text-black font-medium"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="h-9 px-3 flex justify-center items-center bg-blue-600 hover:bg-blue-700 transition-colors rounded-md text-sm text-white font-medium"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
