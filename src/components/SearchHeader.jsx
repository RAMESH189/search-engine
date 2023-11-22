import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { IoIosSettings } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';


export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={'/'}>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png'
            alt='logo'
            width={120}
            height={40}
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <IoIosSettings className='header-icon'/>
          <CgMenuGridO className='header-icon'/>
        </div>
        <button className='px-6 py-2 font-medium bg-blue-500 text-white rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2'>
          Sign in
        </button>
      </div>
      <div className="">
        <SearchHeaderOptions />
      </div>
    </header>
  )
}
