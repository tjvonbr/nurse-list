"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface LandingGoogleMapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function LandingGoogleMap({
  coordinates,
}: LandingGoogleMapProps) {
  const containerStyle = {
    width: "75%",
    height: "75%",
    borderRadius: "5px",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",
  });

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
        zoom={11}
      />
    )
  );
}
