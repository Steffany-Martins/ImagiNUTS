"use client"; // This is a client component

import { useState } from "react";
import GenerateImageButton from "./GenerateImageButton.tsx";

export default function Form({publicRuntimeConfig}:{publicRuntimeConfig: { apiKey: string | undefined }}) {
  const [textareaValue, setTextareaValue] = useState(""); // Initialize with an empty string
  const apiKey = (typeof publicRuntimeConfig !== 'undefined' && publicRuntimeConfig ? publicRuntimeConfig.apiKey : process.env.API_KEY);
  return (
    <form className="flex flex-col items-center justify-center">
    <textarea
      className="h-40 max-w-2xl p-4 mb-4 text-lg border border-solid rounded shadow-sm resize-none w-96 min-w-fit opacity-70 text-gray-dark placeholder:text-gray-light shadow-gray-light"
      placeholder="Create any type of an image you can think of with your mind. Try it 'dog jumping' "
      value={textareaValue} // Set the value of the textarea from the state
      onChange={(e) => setTextareaValue(e.target.value)}
      aria-autocomplete="list"
    />
    {/* Use the client-side component for the button */}
    <GenerateImageButton apiKey={apiKey} inputValue={textareaValue}/>
  </form>
  );
}

