"use client";

import { Social, socials } from "@/config/socials";
import Link from "next/link";
import { Icons } from "./common/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-20 w-full absolute bottom-0 flex justify-center items-center space-x-4 bg-white border-t border-input">
      <small>{`NurseList ©️ ${currentYear}`}</small>
      <div className="flex items-center space-x-2">
        {socials.map((social: Social, idx: number) => {
          const Icon = Icons[social.icon];

          return (
            <Link
              className="text-slate-500 hover:text-black transition-colors"
              key={idx}
              href={social.href}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
