import HelpForm from "@/components/HelpForm";

export default function Help() {
  return (
    <div className="min-h-screen px-5 sm: mt-12 md:mt-24 flex flex-col items-center">
      <div className="w-full sm:w-3/5 lg:w-2/5 flex flex-col items-center space-y-4">
        <h1 className="text-center text-3xl sm:text-5xl text-black font-extrabold">
          Create a support ticket
        </h1>
        <p className="text-center text-slate-500">
          Fill out the form below and we&apos;ll get on top of it as quickly as
          possible!
        </p>
        <HelpForm />
      </div>
    </div>
  );
}
