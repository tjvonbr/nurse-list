"use client";

import { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavItem } from "@/config/navigation";
import NurseListLogo from "./NurseListLogo";
import { useState } from "react";
import { Icons } from "./common/Icons";
import MobileNav from "./MobileNav";

interface MainNavbarProps {
  items?: any[];
  children?: React.ReactNode;
}

export default function MainNavbar({ items, children }: MainNavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="w-full absolute top-0 left-0 py-5 flex justify-between z-10">
      <div className="flex items-center space-x-10">
        <Link href="/" className="hidden md:flex items-center">
          <NurseListLogo />
          <span className="text-xl text-black font-bold lowercase">
            nurselist
          </span>
        </Link>
        {items?.length ? (
          <nav className="hidden sm:flex space-x-10">
            {items?.map((item, idx) => (
              <Link
                key={idx}
                className="text-sm text-black hover:text-slate-500 font-semibold transition-colors"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        ) : null}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close size={25} /> : <NurseListLogo />}
          <span className="font-bold">Menu</span>
        </button>
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          Contact
        </Link>
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Log in
        </Link>
        <Link
          href="/register"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
