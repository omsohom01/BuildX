'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/nextjs'

const Navbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className='w-full h-18 flex items-center px-10 justify-between bg-transparent  '>
      <Link href="/" className='flex items-center gap-3 cursor-pointer hover:opacity-80 transition'>
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
      <div className='flex justify-between gap-5 items-center'>
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal">
              <button className="border border-white text-white px-4 py-2 rounded-full font-sans font-medium cursor-pointer hover:bg-white/10 transition-all text-sm">
                Login
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-white text-black px-4 py-2 rounded-full font-sans font-bold cursor-pointer hover:bg-white/95 transition-all text-sm">
                Sign Up
              </button>
            </SignUpButton>
          </>
        ) : (
          <>
            <Link href="/campaign/title">
              <button className="bg-[#6c47ff] text-white px-4 py-2 rounded-full font-sans font-bold cursor-pointer hover:bg-purple-700 transition-all text-sm">
                Get Started
              </button>
            </Link>
            <UserButton />
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
