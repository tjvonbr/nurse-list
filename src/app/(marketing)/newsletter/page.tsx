import NewsletterForm from "@/components/NewsletterForm";

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center space-y-12 md:space-y-48 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="w-full md:w-4/5 m-auto flex flex-col justify-center items-center space-y-6">
          <h1 className="text-center text-3xl sm:text-5xl md:text-6xl text-black font-black">
            Subscribe to our{" "}
            <span className="font-black from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              free{" "}
            </span>
            newsletter today!
          </h1>
          <p className="md:w-3/5 text-center sm:text-xl sm:leading-8 text-gray-600">
            High-paying travel contracts in your inbox every Monday morning
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
