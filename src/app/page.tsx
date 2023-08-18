import HomeOperations from "@/components/HomeOperations";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Script from "next/script";
import { advent } from "./fonts";
import { cn } from "@/lib/utils";
import { City, cities } from "@/config/cities";
import CityCard from "@/components/CityCard";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center">
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
        <h2 className="w-1/2 text-center text-3xl font-bold">
          When you join{" "}
          <span className="font-bold from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>
          , you get access to a handful of perks! Here are a few!
        </h2>

        <section className="w-3/4 my-10 grid grid-cols-2 gap-2 p-2 rounded-md bg-blue-600">
          <div className="h-[300px] px-10 flex flex-col justify-center space-y-6 rounded-md bg-[#e5e7eb]">
            <div className="w-40 p-2 flex justify-center space-x-4 rounded-md border-2 border-black from-purple-600 to-blue-600 bg-gradient-to-r">
              <p className="text-white font-bold">001 NETWORK</p>
            </div>
            <p className="text-2xl font-bold">Connect with local recruiters</p>
            <p className="text-gray-500 font-medium">
              Speak with recruiters in the city you want to live and work in
              before making the big move.
            </p>
          </div>
          <div className="h-[300px] px-10 flex flex-col justify-center space-y-6 rounded-md bg-[#e5e7eb]">
            <div className="w-40 p-2 flex justify-center space-x-4 rounded-md border-2 border-black from-purple-600 to-blue-600 bg-gradient-to-r">
              <p className="text-white font-bold">002 HOUSING</p>
            </div>
            <p className="text-2xl font-bold">Find local housing</p>
            <p className="text-gray-500 font-medium">
              Get advice from our community of travel nurses on where to live
              and who to rent from.
            </p>
          </div>
          <div className="h-[300px] px-10 flex flex-col justify-center space-y-6 rounded-md bg-[#e5e7eb]">
            <div className="w-40 p-2 flex justify-center space-x-4 rounded-md border-2 border-black from-purple-600 to-blue-600 bg-gradient-to-r">
              <p className="text-white font-bold">003 MAKE FRIENDS</p>
            </div>
            <p className="text-2xl font-bold">
              Meet travel nurses working in your area
            </p>
            <p className="text-gray-500 font-medium">
              Moving to a city when you don&apos;t know anyone is scary. Meet up
              with other nurses in your area.
            </p>
          </div>
          <div className="h-[300px] px-10 flex flex-col justify-center space-y-6 rounded-md bg-[#e5e7eb]">
            <div className="w-40 p-2 flex justify-center space-x-4 rounded-md border-2 border-black from-purple-600 to-blue-600 bg-gradient-to-r">
              <p className="text-white font-bold">004 HANGOUT</p>
            </div>
            <p className="text-2xl font-bold">Attend our weekly meetups</p>
            <p className="text-gray-500 font-medium">
              Travel nurses in your city are making planning weekend and they
              want you to come! Join on our nights out!
            </p>
          </div>
          <div className="h-[300px] px-10 flex flex-col justify-center space-y-6 rounded-md bg-[#e5e7eb]">
            <div className="w-40 p-2 flex justify-center space-x-4 rounded-md border-2 border-black from-purple-600 to-blue-600 bg-gradient-to-r">
              <p className="text-white font-bold">005 REVIEW</p>
            </div>
            <p className="text-2xl font-bold">Review your experience</p>
            <p className="text-gray-500 font-medium">
              As your contract winds down, review your experience to help future
              travel nurses make educated decisions.
            </p>
          </div>
          <div className="h-[300px] px-10 flex flex-col justify-center space-y-6 rounded-md bg-[#e5e7eb]">
            <div className="w-40 p-2 flex justify-center space-x-4 rounded-md border-2 border-black from-purple-600 to-blue-600 bg-gradient-to-r">
              <p className="text-white font-bold">006 START OVER</p>
            </div>
            <p className="text-2xl font-bold">Discover your next gig</p>
            <p className="text-gray-500 font-medium">
              Time to research where you&apos;ll travel to next! Sign a new
              contract in the same city or see what a new city has to offer.
            </p>
          </div>
        </section>

        <h2 className="w-1/2 mt-32 mb-16 text-center text-3xl font-bold">
          Here are the cities we&apos;re with a flourishing{" "}
          <span className="font-bold from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>{" "}
          community.
        </h2>
        <section className="w-3/4 mb-32 flex flex-wrap items-center justify-center space-x-6">
          {cities.map((city: City, idx: number) => {
            const {
              name,
              lat,
              lng,
              href,
              costOfLiving,
              imageSrc,
              altText,
              scores,
            } = city;
            return (
              <CityCard
                key={idx}
                name={name}
                lat={lat}
                lng={lng}
                href={href}
                costOfLiving={costOfLiving}
                imageSrc={imageSrc}
                altText={altText}
                scores={scores}
              />
            );
          })}
        </section>

        <section id="about" className="w-3/4 mb-32 rounded-md bg-purple-600">
          <div className="h-[400px] m-2 py-5 flex flex-col justify-between bg-white rounded-md border border-black">
            <p className={(cn(advent.className), "px-10 font-bold uppercase")}>
              At NurseList, we&apos;re,
            </p>
            <p className="px-10 text-4xl font-bold">
              Making it easier for travel nurses to find{" "}
              <span className="text-blue-600">high-paying</span> contracts in
              cities they&apos;ve dreamed of traveling to while meeting{" "}
              <span className="text-pink-600">new friends</span> and making{" "}
              <span className="text-purple-600">new memories</span>.
            </p>
            <div className="px-10 flex justify-between items-center">
              <p className="w-3/4 text-2xl font-thin">
                <span className="font-bold">NurseList</span> is devoted to
                making your travel nursing experience an unforgetable.
                We&apos;ll help you find a job, meet new friends, and make
                memories that will last a lifetime.
              </p>
              <a
                className="h-10 px-5 py-2 flex justify-center items-center rounded-md bg-blue-600 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(37,99,235,0.15)] hover:bg-blue-700 transition-colors text-lg text-white font-semibold"
                href="/register"
              >
                Get started
              </a>
            </div>
          </div>
        </section>
      </section>

      <footer className="absolute bottom-3 left-3">
        <div className="absolute bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-xs font-semibold"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="rounded-md"
              width={50}
              height={10}
              priority
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
