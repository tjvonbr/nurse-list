import { Feature, features } from "@/config/features";
import HomeOperations from "@/components/HomeOperations";
import { icons } from "@/config/icons";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "NurseList",
  description: "Join a professional community of travel nurses with NurseList",
};

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

      <section id="features" className="flex flex-col items-center">
        <h2 className="text-gray-300 text-xl font-black">Features</h2>
        <p className="w-full md:w-1/2 text-center text-5xl font-bold">
          When you join{" "}
          <span className="font-black from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
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
        <div className="w-full p-5 my-10 md:w-[600px] flex flex-col items-center rounded-md bg-slate-900">
          <p className="text-4xl text-white font-bold">Basic</p>
          <p className="mt-4 text-5xl from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">
            $29/month
          </p>
          <div className="w-[90%] my-8 border-t-[0.5px] border-slate-600" />
          <div className="w-[90%] flex flex-col items-center space-y-8">
            <div className="w-full flex flex-row space-x-8 items-center">
              <Check color="#9333ea" size={50} />
              <p className="text-gray-300">
                Access to our exclusive Slack channels with other nurses living
                in the city you&apos;re currently working in or would like to
                work in soon.{" "}
              </p>
            </div>
            <div className="w-full flex flex-row space-x-8 items-center">
              <Check color="#9333ea" size={50} />
              <p className="text-gray-300">
                Access to our classifieds section where you can find
                fully-furnished housing and furniture for the duration of your
                contract.
              </p>
            </div>
            <div className="w-full flex flex-row space-x-8 items-center">
              <Check color="#9333ea" size={50} />
              <p className="text-gray-300">
                Reviews of cities and hospitals left by fellow travel nurses
                that have worked in the cities and hospitals you&apos;re
                currently interested in.
              </p>
            </div>
          </div>
          <button className="w-full md:w-1/2 mt-12 bg-violet-600 hover:bg-violet-700 transition-colors rounded-md h-10">
            Get started!
          </button>
        </div>
      </section>
    </main>
  );
}
