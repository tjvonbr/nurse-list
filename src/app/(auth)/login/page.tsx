import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NurseList | Login",
  description: "Login to your account",
};

export default function Login() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <header className="w-full absolute left-3 top-2 flex justify-between items-center">
        <Link className="text-xl text-black font-bold" href="/">
          NurseList
        </Link>
      </header>
      <div className="w-1/4 flex flex-col justify-center items-center space-y-3">
        <div className="flex flex-col items-center space-y-1">
          <h1 className="text-2xl text-black font-bold">Welcome back!</h1>
          <p className="text-center text-sm text-gray-500">
            Enter your email to sign in to your account
          </p>
        </div>
        <LoginForm />
        <Link
          className="text-sm text-gray-500 hover:underline"
          href="/register"
        >
          Don&apos;t have an account yet? Sign up here
        </Link>
      </div>
    </div>
  );
}
