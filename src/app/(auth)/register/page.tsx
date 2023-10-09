import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NurseList | Register",
  description: "Sign up with NurseList",
};

interface RegisterProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default function Register({ searchParams }: RegisterProps) {
  const email = searchParams.email ?? null;
  console.log(email);

  return (
    <div className="grid grid-cols-2">
      <div className="bg-slate-100" />
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <header className="w-full absolute left-3 top-2 flex justify-between items-center">
          <Link className="text-xl text-black font-bold" href="/">
            NurseList
          </Link>
        </header>
        <div className="w-1/2 flex flex-col justify-center items-center space-y-3">
          <h1 className="text-3xl text-black font-bold">Welcome!</h1>
          <p className="text-center text-sm text-gray-600">
            Please fill out the fields below so we can get you started!
          </p>
          <RegisterForm email={email} />
          <Link className="mt-3 text-sm hover:underline" href="/login">
            Already have an account yet? Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}
