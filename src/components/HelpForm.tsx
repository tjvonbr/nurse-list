"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./common/Button";
import { Input } from "./common/Input";
import { useState } from "react";

export default function HelpForm() {
  const [supportTicket, setSupportTicket] = useState({
    name: "",
    email: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSupportTicket({ ...supportTicket, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    console.log("Submitted!");
  }

  return (
    <form className="w-full flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <fieldset className="flex flex-col">
          <label className="text-xs font-bold" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            name="name"
            onChange={handleChange}
            value={supportTicket.name}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label className="text-xs font-bold" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            onChange={handleChange}
            value={supportTicket.email}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label className="text-xs font-bold" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="px-3 py-2 border border-input rounded-md text-sm text-black"
            onChange={handleChange}
            value={supportTicket.description}
          />
        </fieldset>
      </div>
      <button
        className={cn(buttonVariants({ variant: "default" }), "w-full")}
        onClick={handleSubmit}
      >
        Submit ticket
      </button>
    </form>
  );
}
