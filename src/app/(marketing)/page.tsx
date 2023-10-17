import FeaturesSection from "@/components/FeaturesSection";
import HomeOperations from "@/components/HomeOperations";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center">
      <HomeOperations />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
