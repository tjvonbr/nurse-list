"use client";

import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./common/Button";

export default async function AuthNav() {
  const user = getCurrentUser();

  return (
    <nav className="flex items-center space-x-4">
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "hidden md:inline-flex"
        )}
      >
        Contact
      </Link>
      {user ? (
        <UserDropdown user={session.user} />
      ) : (
        <>
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Log in
          </Link>
          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden md:inline-flex"
            )}
          >
            Sign up
          </Link>
        </>
      )}
    </nav>
  );
}
