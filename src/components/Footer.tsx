"use client";

import { Social, socials } from "@/config/socials";
import Link from "next/link";
import { Icons } from "./common/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center space-y-2 bg-white py-10 border-t border-input">
      <small>{`NurseList ©️ ${currentYear}`}</small>
      <div className="flex items-center space-x-4">
        {socials.map((social: Social, idx: number) => {
          const Icon = Icons[social.icon];

          return (
            <Link
              className="text-slate-500 hover:text-black transition-colors"
              key={idx}
              href={social.href}
            >
              <Icon size={25} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
