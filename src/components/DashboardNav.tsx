"use client";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemWithIcon } from "@/config/navigation";

interface DashboardNavProps {
  items: NavItemWithIcon[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="w-full pr-5 flex-grow flex flex-col justify-start space-y-2 border-r border-accent">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
