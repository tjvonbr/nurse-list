"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInSection } from "@/lib/framer";
import { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  return (
    <motion.section
      id="pricing"
      className="my-32 flex flex-col items-center"
      variants={fadeInSection}
      initial="rest"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-lg md:text-xl text-purple-600 font-black">Pricing</h2>
      <p className="w-full text-center text-3xl text-black font-bold">
        Level up your travel experience
      </p>
      <div className="w-full p-5 my-10 md:w-[600px] flex flex-col items-center rounded-md bg-slate-100 border border-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <p className="text-4xl text-black font-bold">Basic</p>
        <p className="mt-4 text-5xl from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">
          $29/month
        </p>
        <div className="w-[90%] my-8 border-t-[0.5px] border-slate-600" />
        <div className="w-[90%] flex flex-col items-center space-y-8">
          <div className="w-full flex flex-row space-x-8 items-center">
            <Check color="#9333ea" size={50} />
            <p className="text-black font-medium">
              Access to our exclusive Slack channels with other nurses living in
              the city you&apos;re currently working in or would like to work in
              soon.{" "}
            </p>
          </div>
          <div className="w-full flex flex-row space-x-8 items-center">
            <Check color="#9333ea" size={50} />
            <p className="text-black font-medium">
              Access to our classifieds section where you can find
              fully-furnished housing and furniture for the duration of your
              contract.
            </p>
          </div>
          <div className="w-full flex flex-row space-x-8 items-center">
            <Check color="#9333ea" size={50} />
            <p className="text-black font-medium">
              Reviews of cities and hospitals left by fellow travel nurses that
              have worked in the cities and hospitals you&apos;re currently
              interested in.
            </p>
          </div>
          <Link
            href="/register"
            className={cn(buttonVariants({ variant: "default" }), "w-1/2")}
          >
            Get started!
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
