"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch, IoMdMic } from "react-icons/io";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  // search handler
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setRandomSearchLoading(true);
    const randomSerchTerm = await fetch(
      "https://random-word-api.herokuapp.com/word"
    )
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!randomSerchTerm) return;
    router.push(`/search/web?searchTerm=${randomSerchTerm}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:mx-w-2xl"
      >
        <IoIosSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none"
        />
        <IoMdMic className="text-lg hover:bg-gray-200" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-3 justify-center sm:flex-row mt-8 ">
        <button onClick={handleSubmit} className="btn">
          Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex justify-center items-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
