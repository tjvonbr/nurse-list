"use client";

import { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

interface LandingFormProps {
  handleChangeCoordinates: (coordinates: { lat: number; lng: number }) => void;
}

export default function LandingForm({
  handleChangeCoordinates,
}: LandingFormProps) {
  const [city, setCity] = useState("");

  function handleChange(query: string) {
    setCity(query);
  }

  async function handleSelect(address: string) {
    const response = await geocodeByAddress(address);
    setCity(response[0].formatted_address);

    const coordinates = await getLatLng(response[0]);
    handleChangeCoordinates({ lat: coordinates.lat, lng: coordinates.lng });
  }

  const searchOptions = {
    types: ["(cities)"],
    componentRestrictions: { country: "us" },
  };

  return (
    <form className="w-3/4 flex flex-col items-center px-2 space-y-2">
      <PlacesAutocomplete
        value={city}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search for a city...",
                className:
                  "h-10 w-[300px] border border-slate-300 px-2 py-2 rounded-md text-sm",
              })}
            />
            <div className="bg-white">
              {suggestions.map((suggestion) => {
                return (
                  // eslint-disable-next-line
                  <div
                    className="w-full px-2 hover:bg-gray-200 hover:rounded-sm hover:cursor-pointer"
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <span className="text-sm font-medium">
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </form>
  );
}
