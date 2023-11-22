import Link from 'next/link'
import React from 'react'
import { CgMenuGridO } from "react-icons/cg";

export default function HomeHeader() {
  return (
      <header className='flex justify-end p-5 text-sm'>
          <div className="flex space-x-4 items-center">
              <Link className='hover:underline' href='https://mail.google.com'>Gmail</Link>
              <Link className='hover:underline' href='https://image.google.com'>Images</Link>
              <CgMenuGridO className='bg-transparent hover:bg-gray-200 rounded-full text-4xl hover:cursor-pointer' />
              <button className=' px-6 py-2 font-medium bg-blue-500 text-white rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>
                  Sign in
              </button>
          </div>
    </header>
  )
}
