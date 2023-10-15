import { buttonVariants } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="border-box min-h-screen flex flex-col pt-32 items-center space-y-8">
      <h1 className="text-5xl text-black font-extrabold">Contact Us</h1>
      <div className="flex flex-col space-between space-y-4 px-5 py-5 border border-slate-100 rounded-md h-[300px]">
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
        <div className="flex justify-between items-center space-x-4">
          <div className="w-3/4 flex flex-col space-y-2">
            <p className="text-2xl text-black font-bold">Get product support</p>
            <p className="text-slate-400">
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
