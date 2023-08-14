"use client";

import { useState } from "react";
import Spinner from "./common/Spinner";

export default function FeatureRequestForm() {
  const [subject, setSubject] = useState("");
  const [request, setRequest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <form className="w-full mt-20 flex flex-col items-center space-y-3">
      <fieldset className="w-1/2 flex flex-col">
        <label className="mb-1 text-xs font-semibold" htmlFor="">
          Subject
        </label>
        <input
          className="h-10 m-0 px-2 py-1 border border-slate-200 rounded-md text-sm"
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSubject(e.target.value)
          }
        />
      </fieldset>
      <fieldset className=" w-1/2 flex flex-col">
        <label className="mb-1 text-xs font-semibold" htmlFor="">
          Body
        </label>
        <textarea
          className="h-64 px-2 py-1 text-sm"
          value={request}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setRequest(e.target.value)
          }
        />
      </fieldset>
      <button
        className="h-10 w-1/2 flex justify-center items-center rounded-md text-sm bg-black text-white"
        onClick={handleSubmit}
      >
        {isSubmitting ? <Spinner color="white" size={15} /> : "Submit"}
      </button>
    </form>
  );
}
