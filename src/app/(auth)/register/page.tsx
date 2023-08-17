import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
  description: "Sign up with NurseList",
};

export default function Register() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <header className="w-full absolute left-3 top-2 flex justify-between items-center">
        <Link className="text-xl font-bold" href="/">
          👩‍⚕️ NurseList
        </Link>
      </header>
      <div className="w-1/4 flex flex-col justify-center items-center space-y-3">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="text-center">
          We&apos;re excited you&apos;re interested in{" "}
          <span className="font-bold from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>
          ! Please fill out the fields below so we can get you started!
        </p>
        <RegisterForm />
        <Link className="mt-3 text-sm hover:underline" href="/login">
          Already have an account yet? Sign in here
        </Link>
      </div>
    </div>
  );
}
