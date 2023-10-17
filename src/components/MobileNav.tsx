import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { NavItem } from "@/config/navigation";
import NurseListLogo from "./NurseListLogo";

interface MobileNavProps {
  items: any;
  children?: React.ReactNode;
}

export default function MobileNav({ items }: MobileNavProps) {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-5 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-3 rounded-md bg-white p-4 text-black shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <NurseListLogo height={25} width={25} />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item: NavItem, index: number) => (
            <Link
              key={index}
              href={item.href}
              className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
