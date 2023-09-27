import { Feature, features } from "@/config/features";
import HomeOperations from "@/components/HomeOperations";
import { icons } from "@/config/icons";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen px-5 relative flex flex-col items-center">
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

      <section id="features" className="flex flex-col items-center">
        <h2 className="text-gray-300 text-xl font-black">Features</h2>
        <p className="w-full md:w-1/2 text-center text-5xl font-bold">
          When you join{" "}
          <span className="font-bold from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>
          , you get access to a handful of perks!
        </p>

        <div className="box-content my-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature: Feature, idx: number) => {
            const Icon = icons[feature.icon];

            return (
              <div
                className="md:w-[300px] p-5 flex flex-col space-y-2 rounded-md bg-slate-900"
                key={idx}
              >
                <div className="h-12 w-12 p5 flex justify-center items-center rounded-md from-purple-600 to-blue-600 bg-gradient-to-br">
                  <Icon color="white" size={25} />
                </div>
                <p className="text-2xl font-bold">{feature.title}</p>
                <p className="text-gray-500 font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="my-32 flex flex-col items-center" id="pricing">
        <h2 className="text-gray-300 text-xl font-black">Pricing</h2>
        <p className="w-full text-center text-5xl font-bold">
          Level up your travel experience
        </p>
        {/* <div className="p-5 my-10 w-[600px] rounded-md bg-slate-900">
          <p className="text-3xl text-white font-bold">Basic</p>
          <p>$29</p>
          <p>per month</p>
        </div> */}
      </section>
    </main>
  );
}
