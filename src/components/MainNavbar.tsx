"use client";

import { Icons } from "./common/Icons";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NurseListLogo from "./NurseListLogo";
import { useState } from "react";

interface MainNavbarProps {
  items?: any[];
  children?: React.ReactNode;
}

export default function MainNavbar({ items, children }: MainNavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <NurseListLogo height={50} width={50} />
        <span className="text-xl text-black font-bold lowercase">
          nurselist
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex items-center">
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
        {showMobileMenu ? (
          <Icons.close size={25} />
        ) : (
          <NurseListLogo height={50} width={50} />
        )}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
