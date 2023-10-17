import EmailForm from "./EmailForm";

export default function HomeOperations() {
  return (
    <div className="min-h-screen mt-24">
      <div className="w-full md:w-4/5 px-5 md:mt-16 lg:mt-48 m-auto flex flex-col justify-center items-center space-y-6">
        <div className="relative flex before:absolute before:h-[1600px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[350px] after:w-[800px] after:bg-gradient-conic after:from-blue-600 after:via-pink-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:-translate-x-[400px] after:-translate-y-[50px] after:dark:from-purple-900 after:dark:via-[#016fff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />
        <h1 className="text-center text-5xl text-black font-black">
          Join a professional community of travel nurses with{" "}
          <span className="font-black from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            NurseList
          </span>
        </h1>
        <p className="md:w-3/5 text-center text-lg text-gray-600">
          Gain access to our exclusive community of travel nurses in cities
          across the country to make new friends and find your next contract!
        </p>
        <EmailForm />
      </div>
    </div>
  );
}
