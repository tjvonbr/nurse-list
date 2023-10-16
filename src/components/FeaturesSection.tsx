"use client";

import { fadeInListItems, fadeInSection } from "@/lib/framer";
import { Feature, features } from "@/config/features";
import { Icons } from "@/components/common/Icons";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="flex flex-col items-center"
      variants={fadeInSection}
      initial="rest"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-xl text-purple-600 font-black">Features</h2>
      <p className="w-full md:w-1/2 text-center text-3xl text-black font-bold">
        When you join{" "}
        <span className="font-black from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          NurseList
        </span>
        , you get access to a handful of perks!
      </p>

      <div className="box-content my-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature: Feature, idx: number) => {
          const Icon = Icons[feature.icon || "hello"];

          return (
            <motion.div
              className="md:w-[300px] p-5 flex flex-col space-y-2 rounded-md bg-slate-100 border border-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              key={idx}
              variants={fadeInListItems}
              initial="rest"
              whileInView="animate"
              custom={idx}
              viewport={{
                once: true,
              }}
            >
              <div className="h-12 w-12 p5 flex justify-center items-center rounded-md from-purple-600 to-blue-600 bg-gradient-to-br">
                <Icon color="white" size={25} />
              </div>
              <p className="text-2xl text-black font-bold">{feature.title}</p>
              <p className="text-gray-600 font-medium">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
