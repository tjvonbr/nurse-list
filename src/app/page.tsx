"use client";

import Spinner from "@/components/common/Spinner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getWeather() {
      const result = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=42&lon=-87&&appid=c842f7757d9f4251636587822c60d104`
      );

      console.log("WEATHER: ", result);
    }

    // getWeather();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast.success("Email received!  Please check your inbox! 💫");
    }, 1000 * 2);
  }

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
          <form className="px-2 space-y-2" action="">
            <input
              className="h-10 w-full border border-slate-300 px-2 py-2 rounded-md text-sm"
              type="text"
              placeholder="Type your email..."
              value={email}
              onChange={handleChange}
            />
            <button
              className="h-10 w-full flex justify-center items-center rounded-md bg-black hover:bg-gray-800 transition-colors text-white text-sm"
              onClick={handleSubmit}
            >
              {isLoading ? <Spinner color="white" size={15} /> : "🚀 Submit"}
            </button>
          </form>
        </div>
      </div>

      <h2 className="text-3xl font-bold">You can find us in</h2>
      <div className="mt-6 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://jobs.nm.org/employment/chicago-illinois-united-states-nursing-jobs/27763/68550/6252001-4896861-4888671-4887398/4"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Chicago{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              💨
            </span>
          </h2>
          <Image
            src="/chicago.png"
            alt="Chicago Skyline"
            className="rounded-md"
            width={500}
            height={500}
            priority
          />
          <div className="mt-2 flex justify-between">
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              Feels like 79&deg;F ⛅️
            </p>
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              $2,425/month
            </p>
          </div>
        </a>

        <a
          href="https://jooble.org/jobs-rn/Phoenix%2C-AZ"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Phoenix{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ☀️
            </span>
          </h2>
          <Image
            src="/phoenix.png"
            alt="Phoenix Skyline"
            className="rounded-md"
            width={500}
            height={500}
          />
          <div className="mt-2 flex justify-between">
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              Feels like 106&deg;F 🥵
            </p>
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              $2,445/month
            </p>
          </div>
        </a>

        <a
          href="https://www.monster.com/jobs/q-nursing-jobs-l-san-antonio-tx"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            San Antonio{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              🤠
            </span>
          </h2>
          <Image
            src="/san_antonio.png"
            alt="San Antonio Skyline"
            className="rounded-md"
            width={500}
            height={500}
            priority
          />
          <div className="mt-2 flex justify-between">
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              Feels like 105&deg;F 🥵
            </p>
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              $2,051/month
            </p>
          </div>
        </a>

        <a
          href="https://hawaiipacifichealth.jobs/nursing/new-jobs/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Honolulu{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              🌴
            </span>
          </h2>
          <Image
            src="/honolulu.png"
            alt="Honolulu Skyline"
            className="rounded-md"
            width={500}
            height={500}
            priority
          />
          <div className="mt-2 flex justify-between">
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              Feels like 82&deg;F ⛅️
            </p>
            <p className={`m-0 max-w-[30ch] text-xs font-medium`}>
              $2,804/month
            </p>
          </div>
        </a>
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
