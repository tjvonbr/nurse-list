"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Emoji from "./common/Emoji";
import { cityEmojiMap } from "@/config/cities";

interface CityCardProps {
  name: string;
  lat: string;
  lon: string;
  costOfLiving: string;
  href: string;
  imageSrc: string;
  altText: string;
}

export default function CityCard({
  name,
  lat,
  lon,
  costOfLiving,
  href,
  imageSrc,
  altText,
}: CityCardProps) {
  const [feelsLike, setFeelsLike] = useState<number | null>(null);
  const [weatherIcon, setWeatherIcon] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPENWEATHER_API_KEY}`;

  useEffect(() => {
    async function getCityTemps() {
      const response = await fetch(url);

      if (response.ok) {
        const { main, weather } = await response.json();
        const feelsLike = main.feels_like;
        setFeelsLike(feelsLike.toFixed(1));
        const icon = weather[0].icon;
        const iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
        setWeatherIcon(iconSrc);
      }
    }

    if (process.env.NODE_ENV === "production") getCityTemps();
  });

  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {name}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <Emoji symbol={cityEmojiMap[name]} label={"hello"} />
        </span>
      </h2>
      <Image
        src={imageSrc}
        alt={altText}
        className="rounded-md"
        width={500}
        height={500}
      />
      <div className="mt-2 flex justify-between">
        <div className="flex">
          <p className="m-0 max-w-[30ch] text-xs font-medium">
            Feels like {feelsLike}&deg;F
          </p>
          <Image
            className="-translate-y-1"
            src={weatherIcon}
            alt="Weather"
            width={25}
            height={25}
          />
        </div>
        <p className="m-0 max-w-[30ch] text-xs font-medium">{costOfLiving}</p>
      </div>
    </a>
  );
}
