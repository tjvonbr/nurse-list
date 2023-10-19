import AuthNav from "@/components/AuthNav";
import { getCurrentUser } from "@/lib/session";
import MainNavbar from "@/components/MainNavbar";
import { navigationItems } from "@/config/navigation";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/DashboardNav";
import Footer from "@/components/Footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNavbar items={navigationItems.main} />
          <AuthNav />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:flex flex-col w-[200px] items-center ">
          <DashboardNav items={navigationItems.dashboard} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
