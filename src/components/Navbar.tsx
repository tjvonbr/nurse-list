import { navigationItems } from "@/config/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-10 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Link className="text-xl font-bold" href="#">
          👩‍⚕️ NurseList
        </Link>
        <nav className="flex space-x-6">
          {navigationItems.marketing.map((item, idx) => {
            return (
              <Link
                key={idx}
                className="text-sm text-black hover:text-slate-700 transition-colors"
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <a
        className="h-10 px-5 py-2 flex border border-blue-600 justify-center items-center rounded-md bg-transparent hover:bg-blue-700 transition-colors text-md text-blue-600 hover:text-white"
        href="/login"
      >
        Login
      </a>
    </header>
  );
}
