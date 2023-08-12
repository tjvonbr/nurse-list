"use client";

import { useState } from "react";
import Spinner from "./common/Spinner";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoggingIn(true);

    setTimeout(() => {
      setIsLoggingIn(false);
      setEmail("");
    }, 1000 * 2);
  }

  return (
    <form className="w-full flex flex-col items-center space-y-3">
      <fieldset className="w-full flex flex-col">
        <label className="text-xs font-semibold" htmlFor="firstName">
          First name
        </label>
        <input
          className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
        />
      </fieldset>
      <fieldset className="w-full flex flex-col">
        <label className="text-xs font-semibold" htmlFor="lastName">
          Last name
        </label>
        <input
          className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
      </fieldset>
      <fieldset className="w-full flex flex-col">
        <label className="text-xs font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="h-10 m-0 px-2 py-1 w-full border border-slate-200 rounded-md text-sm"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </fieldset>
      <fieldset className="w-full flex flex-col">
        <label className="text-xs font-semibold" htmlFor="firstName">
          Birthday
        </label>
        <input
          className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
          type="date"
          name="birthday"
          id="birthday"
          value={birthday}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setBirthday(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="w-full flex flex-col">
        <label className="text-xs font-semibold" htmlFor="location">
          Current location
        </label>
        <input
          className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLocation(e.target.value);
          }}
        />
      </fieldset>
      <button
        className="h-10 w-full flex justify-center items-center rounded-md text-sm bg-black text-white"
        onClick={handleSubmit}
      >
        {isLoggingIn ? <Spinner color="white" size={15} /> : "Submit"}
      </button>
    </form>
  );
}
