import FeatureRequestForm from "@/components/FeatureRequestForm";

export default function FeatureRequest() {
  return (
    <div className="min-h-screen py-2 px-2">
      <h1 className="text-3xl font-bold">Feature Request</h1>
      <p className="text-slate-500">
        We value no one else&apos;s opinion more than you! We want to hear from
        you about what would make this platform even better than it already is!
        Don&apos;t be surprised if someone reaches out asking for more
        information!{" "}
      </p>
      <FeatureRequestForm />
    </div>
  );
}
