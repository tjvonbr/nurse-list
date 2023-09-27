import EmailForm from "./EmailForm";

export default function HomeOperations() {
  return (
    <div className="min-h-screen">
      <div className="w-full md:w-4/5 px-5 md:mt-16 lg:mt-48 m-auto flex flex-col justify-center items-center space-y-6">
        <h1 className="text-center text-5xl font-black">
          Join a professional community of travel nurses with{" "}
          <span className="font-black from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>
        </h1>
        <p className="md:w-3/5 text-center text-lg font-medium text-[#e5e7eb]">
          Gain access to our exclusive community of travel nurses in cities
          across the country to make new friends and find your next contract!
        </p>
        <EmailForm />
      </div>
    </div>
  );
}
