import FeaturesSection from "@/components/FeaturesSection";
import HomeOperations from "@/components/HomeOperations";
import MainNavbar from "@/components/MainNavbar";
import PricingSection from "@/components/PricingSection";
import { navigationItems } from "@/config/navigation";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center">
      <MainNavbar items={navigationItems.marketing} />
      <HomeOperations />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
