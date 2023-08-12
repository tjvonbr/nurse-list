"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function RegisterGoogleMap() {
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",
  });

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 39.83, lng: -95.58 }}
        zoom={4}
      />
    )
  );
}
