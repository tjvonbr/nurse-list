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
    <form className="w-1/2 flex items-center space-x-4">
      <input
        className="flex-grow px-3 py-2 rounded-md text-black"
        name="email"
        onChange={handleChange}
        placeholder="Enter your email..."
        type="email"
        value={email}
      />
      <button
        className="box-content h-10 px-3 flex justify-center items-center rounded-md bg-blue-600 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(37,99,235,0.15)] hover:bg-blue-700 transition-colors text-md"
        onClick={handleSubmit}
      >
        Join now!
      </button>
    </form>
  );
}
