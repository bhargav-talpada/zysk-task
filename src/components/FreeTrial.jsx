import React from 'react'

const FreeTrial = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-[#F9FAFB]">
        <p className="text-[#101828] text-center text-3xl font-bold">Start your free trial</p>
        <p className="text-[#475467] text-center text-lg font-normal px-5">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="w-10/12 flex flex-col-reverse md:flex-row justify-center items-center gap-5">
            <button className="w-full md:w-36 flex justify-center items-center py-3 px-5 rounded-lg text-center text-[#344054] border border-[#6941c6] ">Learn more</button>
            <button className="w-full md:w-36 bg-[#6941c6] py-3 px-5 rounded-lg text-center text-white">Get started</button>
        </div>
    </div>
  )
}

export default FreeTrial