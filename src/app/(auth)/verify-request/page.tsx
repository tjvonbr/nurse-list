import Link from "next/link";

export default function VerifyRequest() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-1/4 flex flex-col justify-center items-center space-y-3">
        <h1 className="text-3xl font-bold">Check your inbox!</h1>
        <p className="text-center text-slate-500">
          We just sent you an email with a login link! If you do not receive it
          after a few minutes, make sure you provided the correct email address.
        </p>
        <Link className="text-xs hover:underline" href="/">
          Back to login
        </Link>
      </div>
    </div>
  );
}
