"use client";

import { useState } from "react";
import { Input } from "./common/Input";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./common/Button";
import { baseUrl } from "@/lib/consts";
import { toast } from "@/components/common/use-toast";
import Spinner from "./common/Spinner";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = email.length < 1;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch(baseUrl + "api/convertkit", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    setIsLoading(false);

    if (!response.ok) {
      return toast({
        title: "Something went wrong",
        description:
          "We couldn't create a subscription for you.  Please try again.",
        variant: "destructive",
      });
    }

    setEmail("");
    return toast({
      title: "Check your email!",
      description: "You should be receiving a confirmation email shortly.",
    });
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
        className={cn(
          buttonVariants({ variant: "default" }),
          "w-full md:w-[150px]"
        )}
        onClick={handleSubmit}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? <Spinner color="white" size={15} /> : "Subscribe"}
      </button>
    </form>
  );
}
