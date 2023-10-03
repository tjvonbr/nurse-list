"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push("register" + "?" + createQueryString("email", email));
  }

  return (
    <form className="box-content w-full sm:w-1/2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
      <input
        className="h-9 w-full sm:flex-grow px-3 py-2 rounded-md bg-slate-900 text-gray-300 text-sm"
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
        Join now!
      </button>
    </form>
  );
}
