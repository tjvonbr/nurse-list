import { Icons } from "@/components/common/Icons";
import Image from "next/image";
import imageSrc from "public/two_nurses_talking.svg";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

interface RegisterProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default function Register({ searchParams }: RegisterProps) {
  const email = searchParams.email ?? null;

  return (
    <div className="grid grid-cols-2">
      <div className="relative flex flex-col justify-center items-center bg-slate-100">
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
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center space-y-3">
          <h1 className="text-2xl text-black font-bold">Welcome!</h1>
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
