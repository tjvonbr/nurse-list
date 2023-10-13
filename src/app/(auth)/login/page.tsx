import { Icons } from "@/components/common/Icons";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="h-screen w-screen relative flex flex-col justify-center items-center">
      <Link
        href="/"
        className="absolute top-10 left-10 flex items-center space-x-2"
      >
        <Icons.left color="black" size={20} />
        <p className="text-black">Back</p>
      </Link>
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
