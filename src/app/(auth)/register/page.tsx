import RegisterForm from "@/components/RegisterForm";
import RegisterGoogleMap from "@/components/RegisterGoogleMap";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="border-r border-slate-300">
        <RegisterGoogleMap />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center space-y-3">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <p className="text-center text-slate-500">
            We&apos;re excited you&apos;re interested in NurseList! Please fill
            out the fields below so we can get you started!
          </p>
          <RegisterForm />
          <Link className="mt-3 text-xs hover:underline" href="/register">
            Already have an account yet? Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}
