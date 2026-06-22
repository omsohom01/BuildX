import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-end  mt-20  gap-8">
      <button
        type="button"
        className="px-6 py-3 text-white rounded-2xl text-xl border-2 border-white/30 cursor-default"
      >
        Launch a Campaign
      </button>
      <h1 className="text-3xl md:text-[35vh] font-semibold text-white/30 tracking-tight font-sans">
        OutreachX
      </h1>
      <div className="w-full text-center mb-4">
        <p className="text-white/50 text-md">
          &copy; {new Date().getFullYear()} All rights reserved by Team Async
        </p>
      </div>
    </div>
  )
}

export default Footer
