import LoginForm from "@/components/LoginForm";
import NewFeatures from "@/components/NewFeatures";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex flex-col justify-center items-center border-r border-slate-300">
        <NewFeatures />
      </div>
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="w-1/2 flex flex-col justify-center items-center space-y-3">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-center text-slate-500">
            We&apos;re excited you&apos;re interested in NurseList! Please fill
            out the fields below so we can get you started!
          </p>
          <LoginForm />
          <Link className="mt-3 text-xs hover:underline" href="/register">
            Don&apos; have an account yet? Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
