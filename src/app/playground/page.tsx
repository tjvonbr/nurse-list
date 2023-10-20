import Image from "next/image";
import imageSrc from "/public/chicago.jpeg";
import { Icons } from "@/components/common/Icons";

export default function Playground() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <a
        href="/reviews/chicago"
        className="relative h-[300px] w-[300px] flex flex-col rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      >
        <div className="h-[225px] w-full relative">
          <Image
            className="rounded-t-md"
            src={imageSrc}
            alt={"Chicago skyline"}
            fill={true}
          />
        </div>
        <div className="h-[75px] w-full absolute bottom-0 left-0 flex justify-around pt-4 border-b border-r border-l rounded-b-md bg-accent">
          <div className="flex flex-col items-center">
            <p className="text-xs text-black font-bold">Overall</p>
            <p className="text-sm text-secondary-foreground">4.7/5.0</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-black font-bold">Living</p>
            <Icons.lock color="gray" size={17} />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-black font-bold">Housing</p>
            <Icons.lock color="gray" size={17} />
          </div>
        </div>
      </a>
    </div>
  );
}
