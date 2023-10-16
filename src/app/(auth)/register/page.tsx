import { Icons } from "@/components/common/Icons";
import Image from "next/image";
import imageSrc from "public/two_nurses_talking.svg";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";
import NurseListLogo from "@/components/NurseListLogo";

interface RegisterProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default function Register({ searchParams }: RegisterProps) {
  const email = searchParams.email ?? null;

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden h-screen relative md:flex flex-col justify-center items-center bg-slate-200">
        <Link
          href="/"
          className="absolute top-10 left-10 flex items-center space-x-2"
        >
          <Icons.left color="black" size={20} />
          <p className="text-black">Back</p>
        </Link>
        <Image
          src={imageSrc}
          alt="Two nurses chatting"
          height={500}
          width={500}
        />
      </div>
      <div className="h-screen px-5 flex flex-col justify-center items-center">
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center space-y-4">
          <NurseListLogo />
          <h1 className="text-2xl sm:text-3xl text-black font-bold">
            Welcome!
          </h1>
          <p className="text-center text-sm text-gray-600">
            Please fill out the fields below so we can get you started!
          </p>
          <RegisterForm email={email} />
          <Link
            className="mt-3 text-sm text-slate-600 hover:underline"
            href="/login"
          >
            Already have an account yet? Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}
