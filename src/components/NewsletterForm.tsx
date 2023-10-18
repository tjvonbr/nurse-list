"use client";

import { useState } from "react";
import { Input } from "./common/Input";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./common/Button";
import { baseUrl } from "@/lib/consts";
import toast from "react-hot-toast";
import Spinner from "./common/Spinner";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch(baseUrl + "api/convertkit", {
      body: JSON.stringify({
        email,
      }),
    });

    setIsLoading(false);

    if (!response.ok) {
      return toast.error(
        "Something went wrong when trying to subscribe you.  Please reach out to support@gonurselist.com!"
      );
    }

    return toast.success("Success!  Please check your inbox for confirmation.");
  }

  return (
    <form
      className="w-full md:w-1/2 flex flex-col md:inline-flex md:flex-row space-y-4 md:space-y-0 md:space-x-2"
      action=""
    >
      <Input
        type="text"
        placeholder="Enter your email..."
        onChange={handleChange}
        value={email}
      />
      <button
        className={cn(buttonVariants({ variant: "default" }))}
        onClick={handleSubmit}
      >
        {isLoading ? <Spinner color="white" size={15} /> : "Subscribe!"}
      </button>
    </form>
  );
}
