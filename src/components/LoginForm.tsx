"use client";

import React, { useState } from "react";
import Spinner from "./common/Spinner";
import { signIn } from "next-auth/react";
import { Input } from "./common/Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoggingIn(true);

    await signIn("email", {
      email,
      callbackUrl: "/dashboard",
    });

    setIsLoggingIn(false);
  }

  return (
    <form className="w-full flex flex-col items-center space-y-2">
      <fieldset className="w-full flex flex-col">
        <label className="text-xs font-semibold" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="name@example.com"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </fieldset>
      <button
        className="h-9 w-full flex justify-center items-center rounded-md text-sm bg-indigo-600 hover:bg-indigo-700 transition-colors text-gray-50"
        disabled={isLoggingIn}
        onClick={handleSubmit}
      >
        {isLoggingIn ? <Spinner color="white" size={15} /> : "Submit"}
      </button>
    </form>
  );
}
