"use client";

import { useState } from "react";
import LandingGoogleMap from "./LandingGoogleMap";
import { advent } from "@/app/fonts";
import { cn } from "@/lib/utils";

export default function HomeOperations() {
  const [email, setEmail] = useState("");
  const [cityCoordinates, setCityCoordinates] = useState({
    lat: 39.83,
    lng: -95.58,
  });

  function handleChangeCoordinates(coordinates: { lat: number; lng: number }) {
    setCityCoordinates({ lat: coordinates.lat, lng: coordinates.lng });
  }

  return (
    <div className="min-h-screen">
      <div className="w-1/2 mt-56 m-auto flex flex-col justify-center items-center space-y-4">
        <h1 className={cn(advent.className, "text-center text-5xl font-bold")}>
          Join a professional community of travel nurses working and traveling
          around the world with{" "}
          <span className="font-bold from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>
        </h1>
        <p className="text-center text-xl font-light">
          Get access to our exclusive community of travel nurses in cities
          across the country. Make new friends! Find new contracts! Just enter
          your email below to get started.
        </p>
        <a
          className="h-10 px-5 py-2 flex justify-center items-center rounded-md bg-blue-600 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(37,99,235,0.15)] hover:bg-blue-700 transition-colors text-lg text-white font-semibold"
          href="/register"
        >
          Get started
        </a>
      </div>
      <div className="flex flex-col justify-center">
        <LandingGoogleMap coordinates={cityCoordinates} />
      </div>
    </div>
  );
}
