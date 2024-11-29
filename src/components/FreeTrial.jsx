import React from 'react'

const FreeTrial = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 px-5 mt-20">
        <p className="text-[#101828] text-center text-xl font-semibold">Start your free trial</p>
        <p className="text-[#475467] text-center text-lg font-normal">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <button className="flex justify-center items-center py-3 px-5 rounded-lg text-center text-[#344054] border border-[#6941c6] ">Learn more</button>
            <button className="bg-[#6941c6] py-3 px-5 rounded-lg text-center text-white">Get started</button>
        </div>
    </div>
  )
}

export default FreeTrial