import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full h-18 flex items-center px-10 justify-between bg-transparent">
      <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
        <Image
          src="/favicon.svg"
          alt="OutreachX Logo"
          width={20}
          height={20}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8"
        />
        <span className="text-2xl sm:text-3xl font-sans text-white hover:text-white/80 transition">
          OutreachX
        </span>
      </Link>
      <div className="flex justify-between gap-5 items-center">
        <button
          type="button"
          className="bg-white text-black px-2 py-1.5 rounded-xl font-sans font-bold cursor-default"
        >
          Login
        </button>
        <button
          type="button"
          className="bg-[#6c47ff] text-white p-2 rounded-xl font-sans font-bold cursor-default"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Navbar
