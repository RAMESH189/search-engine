'use client'

import React, { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';

import {IoIosSearch, IoMdMic, IoIosClose  } from "react-icons/io";

export default function SearchBox() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const searchTerm = searchParams.get("searchTerm");

    const [term, setTerm] = useState(searchTerm || "");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`);
    }

  return (
      <form
          className='flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl'
          onSubmit={handleSubmit}
      >
          <input
              type='text'
              className='w-full focus:outline-none'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
          />
          <IoIosClose onClick={() => setTerm("")} className='text-2xl text-gray-500 cursor-pointer sm:mr-2' />
          <IoMdMic className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer'/>
          <IoIosSearch onClick={handleSubmit} className='hidden sm:inline-flex text-blue-500 text-2xl cursor-pointer'/>
    </form>
  )
}
