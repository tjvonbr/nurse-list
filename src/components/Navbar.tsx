import { navigationItems } from "@/config/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-10 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-10">
        <Link className="text-xl font-bold" href="#">
          NurseList
        </Link>
        <nav className="flex space-x-10">
          {navigationItems.marketing.map((item, idx) => {
            return (
              <Link
                key={idx}
                className="text-sm hover:text-gray-300 font-bold transition-colors"
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
