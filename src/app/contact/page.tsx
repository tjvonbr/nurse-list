import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen px-5 relative flex flex-col justify-center items-center space-y-8">
      <Navbar />
      <h1 className="text-3xl sm:text-5xl text-black font-extrabold">
        Contact Us
      </h1>
      <div className="flex flex-col space-between space-y-4 px-5 py-5 border border-slate-100 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[400px] sm:h-[300px]">
        <div className="flex-grow grid grid-cols-6 grid-rows-3">
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
          <div className="border border-slate-100"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-x-4">
          <div className="w-3/4 flex flex-col space-y-2">
            <p className="text-center sm:text-left text-2xl text-black font-bold">
              Get product support
            </p>
            <p className="text-center sm:text-left text-slate-400">
              Create a support ticket if you&apos;re running into technical
              issues.
            </p>
          </div>
          <Link
            href="/help"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Get support
          </Link>
        </div>
      </div>
    </div>
  );
}
