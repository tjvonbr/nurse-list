"use client";

import { useState } from "react";
import { Input } from "./common/Input";
import toast from "react-hot-toast";
import Spinner from "./common/Spinner";

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

    const response = await fetch("http://localhost:3000/api/notion", {
      method: "POST",
      body: JSON.stringify({
        firstName: recruiter.firstName,
        lastName: recruiter.lastName,
        email: recruiter.email,
      }),
    });

    setIsLoading(false);

    if (!response.ok) {
      return toast.error(
        "Whoops!  Something went wrong.  Please reach out to trevor@gonurselist.com!"
      );
    }

    setRecruiter({
      firstName: "",
      lastName: "",
      email: "",
    });

    return toast.success(
      "Email received!  Someone from the team will reach out shortly."
    );
  }

  return (
    <form className="w-full space-y-2">
      <Input
        type="text"
        placeholder="First name (required)"
        name="firstName"
        value={recruiter.firstName}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Last name (required)"
        name="lastName"
        value={recruiter.lastName}
        onChange={handleChange}
      />
      <Input
        type="email"
        placeholder="Email (required)"
        name="email"
        value={recruiter.email}
        onChange={handleChange}
      />
      <button
        className="w-full h-9 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm transition-colors"
        disabled={disabled || isLoading}
        onClick={handleSubmit}
      >
        {isLoading ? <Spinner size={15} /> : "Submit"}
      </button>
    </form>
  );
}
