import RecruiterForm from "@/components/RecruiterForm";

export default function Recruiters() {
  return (
    <div className="h-screen w-screen py-10 px-5 flex flex-col justify-center items-center">
      <div className="w-3/4 sm:w-1/2 lg:w-1/4 flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl text-black font-bold">Recruiters</h1>
          <p className="w-full text-center text-sm text-slate-600">
            If you work for a travel nursing agency or you&apos;re an
            independent recruiter, you can gain access to our network of travel
            nurses to fill your contracts. Fill out the form below and someone
            will reach out to you soon to get you started.
          </p>
        </div>
        <RecruiterForm />
      </div>
    </div>
  );
}
