import React, { useState } from 'react'
import logo from '../images/Logo wrap.png'
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from 'react-icons/rx';
import { HiBars3 } from 'react-icons/hi2';

const Header = () => {
    
    const [isHeader, setIsHeader] = useState(false);

    const handleHeader = () => {
        setIsHeader(!isHeader);
    }

  return (
    <div className='w-full'>
        <div className='w-full h-20 hidden md:flex justify-center bg-white items-center shadow-lg px-12 z-50'>
            <div className="w-[80%] flex justify-between items-center">
                <div className='flex justify-center items-center'>
                    <div className="">
                        <a href="/"><img className="w-32" src={logo} alt="logo" /></a>
                    </div>
                    <div className="pr-0">
                        <ul className="flex justify-center items-center p-4 m-4">
                            <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Home</li>
                            <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Products <IoIosArrowDown /></li>
                            <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Resources <IoIosArrowDown /> </li>
                            <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Pricing</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <a href="/"><img className="w-10 rounded-full" src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lW7zkE1k7NR-QogEy8sYiAjqBvXRMBpbkmBH0n9P4EnmT4NfaEuXgfpvSgeDAam6jWPkaEwf8-yPWvfxgaCgkR2hQ8Ls5P-uHbbmecqS13SCHP3eodmZwDleY4p1lY6Gc4oisH1EaTcHgp5Ud92EP-JMK5rmZZTDPo7Yiy76EWNudFWiD3EmmX3iK~07LOIaqJjY4kIQHgwdxF0h6BfY1O3mJbNzK5-x199z7inKXWMb4GvnunUwvKIrFb5vBBgIuCVkmal2ywkkHVr5padoMk-A8zmD-AE7iiNDPEznYq2oWxWAymx-lk5EHprO-5gbC-npmdOyjoMZfrxdidG~sg__" alt="swiggy" /></a>
                </div>
            </div>
        </div>
        {/* Mobile View */}
        <div className="w-full bg-white flex md:hidden justify-between items-center shadow-md m-0 p-2">
                <div className="">
                    <a href="/"><img className="w-28" src={logo} alt="" /></a>
                </div>
                <div className="nav-items">
                        {isHeader ? <RxCross1 className="block md:hidden text-2xl cursor-pointer" onClick={handleHeader} /> : <HiBars3 className="block md:hidden text-2xl cursor-pointer" onClick={handleHeader} />}
                    { isHeader &&    
                    <ul className="absolute left-0 w-full gap-2 flex flex-col justify-center items-center p-4 m-4 bg-white transition-all mt-5">
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Home</li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Products</li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Resources</li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600">Pricing</li>
                    </ul>
                    }
                </div>
            </div>
    </div>
  )
}

export default Header