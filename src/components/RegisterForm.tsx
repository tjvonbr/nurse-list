"use client";

import { useState } from "react";
import Spinner from "./common/Spinner";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoggingIn(true);

    const register = await signIn("email", { email });
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
      <div className="w-full flex items-center space-x-4">
        <fieldset className="w-[75%] flex flex-col">
          <label className="text-xs font-semibold" htmlFor="city">
            City
          </label>
          <input
            className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCity(e.target.value);
            }}
          />
        </fieldset>
        <fieldset className="w-[25%] flex flex-col">
          <label className="text-xs font-semibold" htmlFor="state">
            State
          </label>
          <input
            className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
            type="text"
            name="state"
            id="state"
            value={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setState(e.target.value);
            }}
          />
        </fieldset>
      </div>
      <button
        className="h-10 w-full flex justify-center items-center rounded-md text-sm bg-black text-white"
        onClick={handleSubmit}
      >
        {isLoggingIn ? <Spinner color="white" size={15} /> : "Submit"}
      </button>
    </form>
  );
}
