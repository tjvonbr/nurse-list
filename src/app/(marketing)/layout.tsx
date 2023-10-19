import MainNavbar from "@/components/MainNavbar";
import UserDropdown from "@/components/UserDropdown";
import { buttonVariants } from "@/components/common/Button";
import { navigationItems } from "@/config/navigation";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="container z-40 bg-white">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNavbar items={navigationItems.marketing} />
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
              <UserDropdown className="z-40" user={user} />
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
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
