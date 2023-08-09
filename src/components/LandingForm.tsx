"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./common/Spinner";

export default function LandingForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast.success("Email received!  Please check your inbox! 💫");
    }, 1000 * 2);
  }

  return (
    <form className="px-2 space-y-2" action="">
      <input
        className="h-10 w-full border border-slate-300 px-2 py-2 rounded-md text-sm"
        type="text"
        placeholder="Type your email..."
        value={email}
        onChange={handleChange}
      />
      <button
        className="h-10 w-full flex justify-center items-center rounded-md bg-black hover:bg-gray-800 transition-colors text-white text-sm"
        onClick={handleSubmit}
      >
        {isLoading ? <Spinner color="white" size={15} /> : "🚀 Submit"}
      </button>
    </form>
  );
}
