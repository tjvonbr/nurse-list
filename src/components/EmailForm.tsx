"use client";

import { Input } from "./common/Input";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Spinner from "./common/Spinner";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    await fetch("http://localhost:3000/api/mailchimp", {
      method: "POST",
      body: JSON.stringify({
        email,
        tags: [],
      }),
    });

    setIsLoading(false);

    router.push("register" + "?" + createQueryString("email", email));
  }

  return (
    <form className="box-content w-full sm:w-1/2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
      <Input
        name="email"
        onChange={handleChange}
        placeholder="Enter your email..."
        type="email"
        value={email}
      />
      <button
        className="w-full sm:w-[160px] h-9 py-3 px-3 flex flex-row justify-center items-center rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-md"
        onClick={handleSubmit}
      >
        {isLoading ? <Spinner color="white" size={15} /> : "Join now!"}
      </button>
    </form>
  );
}
