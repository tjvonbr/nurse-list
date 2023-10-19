"use client";

import { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";
import { Input } from "./common/Input";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Spinner from "./common/Spinner";
import { toast } from "./common/use-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const isDisabled = email.length < 1;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoggingIn(true);

    const response = await signIn("email", {
      email: email.toLowerCase(),
      redirect: false,
      callbackUrl: "/dashboard",
    });

    setIsLoggingIn(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <form className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center space-y-2">
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
      <button
        className={cn(buttonVariants({ variant: "default" }), "w-full")}
        disabled={isDisabled || isLoggingIn}
        onClick={handleSubmit}
      >
        {isLoggingIn ? <Spinner color="white" size={15} /> : "Submit"}
      </button>
    </form>
  );
}
