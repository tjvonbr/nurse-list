import FeaturesSection from "@/components/FeaturesSection";
import HomeOperations from "@/components/HomeOperations";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen pt-10 px-5 relative flex flex-col items-center">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-LGC0GGQ5E1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-LGC0GGQ5E1');
          `}
      </Script>
      <Navbar />
      <HomeOperations />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
