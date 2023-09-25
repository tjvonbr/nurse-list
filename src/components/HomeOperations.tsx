"use client";

import { useState } from "react";
import LandingGoogleMap from "./LandingGoogleMap";
import { cn } from "@/lib/utils";
import EmailForm from "./EmailForm";

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
      <div className="w-3/5 mt-48 m-auto flex flex-col justify-center items-center space-y-6">
        <h1 className="text-center text-5xl font-black">
          Join a professional community of travel nurses with{" "}
          <span className="font-black from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>
        </h1>
        <p className="w-1/2 text-center text-xl font-light">
          Gain access to our exclusive community of travel nurses in cities
          across the country to make new friends and find your next contract!
        </p>
        <EmailForm />
      </div>
    </div>
  );
}
