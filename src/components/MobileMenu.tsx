"use client";

import {
  DropdownContent,
  DropdownMenu,
  DropdownTrigger,
} from "@/components/common/Dropdown";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./common/Button";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownTrigger>
        <button
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "px-0 text-md text-black font-bold"
          )}
        >
          Menu
        </button>
      </DropdownTrigger>
      <DropdownContent>Hello</DropdownContent>
    </DropdownMenu>
  );
}
