"use client";

import { useState } from "react";
import Spinner from "./common/Spinner";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "./common/Input";
import { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

export default function RegisterForm({ email }: { email: string | null }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: email ?? "",
    birthday: "",
  });

  const searchParams = useSearchParams();

  const isDisabled =
    user.firstName.length < 1 ||
    user.lastName.length < 1 ||
    user.email.length < 1 ||
    user.birthday.length < 1;

  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    const signInResult = await signIn("email", {
      email: user.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    });

    // const response = await fetch("http://localhost:3000/api/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     email: user.email,
    //     birthday: user.birthday,
    //   }),
    // });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast.error("Oh no!  Something went wrong signing you up!");
    } else {
      toast.success("Yay!  You're signed up.  Time to login in!");
      router.replace("/login");
    }
  }

  return (
    <form className="w-full flex flex-col items-center space-y-3">
      <fieldset className="w-full flex flex-col space-y-1">
        <label className="text-xs text-black font-semibold" htmlFor="firstName">
          First name
        </label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="w-full flex flex-col space-y-1">
        <label className="text-xs text-black font-semibold" htmlFor="lastName">
          Last name
        </label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={user.lastName}
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
          id="email"
          value={user.email}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="w-full flex flex-col space-y-1">
        <label className="text-xs text-black font-semibold" htmlFor="firstName">
          Birthday
        </label>
        <Input
          type="date"
          name="birthday"
          id="birthday"
          value={user.birthday}
          onChange={handleChange}
        />
      </fieldset>
      <button
        className={cn(buttonVariants({ variant: "default" }), "w-full")}
        onClick={handleSubmit}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? <Spinner color="white" size={15} /> : "Submit"}
      </button>
    </form>
  );
}
