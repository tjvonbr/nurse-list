import CityCard from "@/components/CityCard";
import LandingForm from "@/components/LandingForm";
import { City, cities } from "@/config/cities";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center">
      <header className="w-full px-3 py-2 flex justify-between items-center ">
        <Link className="text-xl font-bold" href="#">
          👩‍⚕️ NurseList
        </Link>
      </header>
      <div className="h-64 w-3/4 m-16 flex justify-between items-center">
        <h1 className="w-1/2 text-4xl font-bold">
          Join a professional community of travel nurses living and traveling
          around the world
        </h1>
        <div className="w-[300px] flex flex-col space-y-2 justify-between rounded-md">
          <div className="flex flex-col items-center">
            <p className="text-center text-black text-sm font-semibold">
              Sign up now to get access to our private Slack and Discord servers
              to meet like-minded professionals!
            </p>
          </div>
          <LandingForm />
        </div>
      </div>

      <h2 className="text-3xl font-bold">You can find us in</h2>
      <div className="mt-6 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {cities.map((city: City, idx: number) => (
          <CityCard
            key={idx}
            name={city.name}
            lat={city.lat}
            lon={city.lon}
            href={city.href}
            imageSrc={city.imageSrc}
            altText={city.altText}
            costOfLiving={city.costOfLiving}
          />
        ))}
      </div>
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
              width={60}
              height={10}
              priority
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
