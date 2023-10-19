"use client";

import { baseUrl } from "@/lib/consts";
import { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";
import { Input } from "./common/Input";
import Spinner from "./common/Spinner";
import { toast } from "@/components/common/use-toast";
import { useState } from "react";

export default function RecruiterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [recruiter, setRecruiter] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const disabled =
    !recruiter.firstName || !recruiter.lastName || !recruiter.email;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRecruiter({ ...recruiter, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    const mailchimpResponse = await fetch(baseUrl + "/api/mailchimp", {
      method: "POST",
      body: JSON.stringify({
        firstName: recruiter.firstName,
        lastName: recruiter.lastName,
        email: recruiter.email,
        tags: ["Recruiter"],
      }),
    });

    const notionResponse = await fetch(baseUrl + "/api/notion", {
      method: "POST",
      body: JSON.stringify({
        firstName: recruiter.firstName,
        lastName: recruiter.lastName,
        email: recruiter.email,
      }),
    });

    setIsLoading(false);

    if (!mailchimpResponse.ok || !notionResponse.ok) {
      return toast({
        title: "Something went wrong",
        description: "Your sign up request failed.  Please try again.",
      });
    }

    setRecruiter({
      firstName: "",
      lastName: "",
      email: "",
    });

    return toast({
      title: "Success",
      description: "Someone from the team will be in touch shortly.",
    });
  }

  return (
    <>
      <form className="w-full flex flex-col items-center space-y-3">
        <fieldset className="w-full flex flex-col space-y-1">
          <label
            className="text-xs text-black font-semibold"
            htmlFor="firstName"
          >
            First name
          </label>
          <Input
            type="text"
            name="firstName"
            value={recruiter.firstName}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="w-full flex flex-col space-y-1">
          <label
            className="text-xs text-black font-semibold"
            htmlFor="lastName"
          >
            Last name
          </label>
          <Input
            type="text"
            name="lastName"
            value={recruiter.lastName}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="w-full flex flex-col space-y-1">
          <label className="text-xs text-black font-semibold" htmlFor="email">
            Email
          </label>
          <Input
            type="email"
            name="email"
            value={recruiter.email}
            onChange={handleChange}
          />
        </fieldset>
      </form>
      <button
        className={cn(buttonVariants({ variant: "default" }), "w-full")}
        disabled={disabled || isLoading}
        onClick={handleSubmit}
      >
        {isLoading ? <Spinner size={15} /> : "Submit"}
      </button>
    </>
  );
}
