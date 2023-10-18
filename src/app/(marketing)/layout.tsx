import MainNavbar from "@/components/MainNavbar";
import { buttonVariants } from "@/components/common/Button";
import { navigationItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container z-40 bg-transparent">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNavbar items={navigationItems.marketing} />
          <nav className="hidden md:flex items-center space-x-4">
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
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
