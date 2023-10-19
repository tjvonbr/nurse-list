"use client";

import { baseUrl } from "@/lib/consts";
import { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";
import { Input } from "./common/Input";
import { signIn } from "next-auth/react";
import Spinner from "./common/Spinner";
import { toast } from "@/components/common/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm({ email }: { email: string | null }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: email ?? "",
    birthday: "",
  });

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

    const dbUser = await fetch(baseUrl + "api/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthday: user.birthday,
      }),
    });

    if (!dbUser) {
      return toast({
        title: "Something went wrong",
        description: "Your sign up request failed.  Please try again.",
      });
    }

    const signInResult = await signIn("email", {
      email: user.email.toLowerCase(),
      redirect: false,
      callbackUrl: "/",
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Oh no!  Something went wrong signing you up!",
        description: "",
      });
    }

    return toast({
      title: "Check your inbox",
      description:
        "We sent you an account activation link. Be sure to check your spam too.",
    });
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
