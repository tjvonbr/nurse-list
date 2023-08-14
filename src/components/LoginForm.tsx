"use client";

import React, { useState } from "react";
import Spinner from "./common/Spinner";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoggingIn(true);

    const response = await signIn("email", { email });
    console.log(response);

    setIsLoggingIn(false);

    if (!response?.ok) {
      return toast.error(
        "Whoops!  Something went wrong during the login process."
      );
    }

    return toast.success("Please check your email for a login link!");
  }

  return (
    <form className="w-full flex flex-col items-center space-y-3">
      <fieldset className="w-full flex flex-col">
        <label className="text-xs font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
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
