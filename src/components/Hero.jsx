import { FaRegPlayCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import screen from '../images/Screen mockup (REPLACE FILL).png'
import clogo from '../images/Fictional company logo1.png'
import clogo2 from '../images/Fictional company logo2.png'
import clogo3 from '../images/Fictional company logo.png'
import clogo4 from '../images/Fictional company logo4.png'
import clogo5 from '../images/Fictional company logo5.png'
import clogo6 from '../images/Fictional company logo 6.png'

const Hero = () => {
  return (
    <div className='w-full h-auto bg-white flex flex-col justify-center items-center mt-12 md:mt-3'>
        <div className='h-96 flex flex-col justify-center items-center gap-5 px-2'>
            <div className='w-96 flex justify-center items-center border rounded-3xl border-[#6941c6] '>
                <h1 className="border rounded-xl border-[#6941c6] px-2 text-[#6941c6] my-1 mr-5 font-semibold">New feature</h1>
                <p className="flex justify-center items-center text-[#6941c6] font-semibold">Check out the team dashboard <FiArrowRight /> </p>
            </div>
            <p className="px-2 text-xl sm:text-2xl md:text-5xl font-bold">Beautiful analytics to grow smarter</p>
            <p className="leading-7 w-52 sm:w-96 md:w-[700px] text-center text-[#475467] text-[20px] font-normal">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <button className="flex justify-center items-center py-3 px-5 rounded-lg text-center text-[#344054] border border-[#6941c6] "> <FaRegPlayCircle /> Demo</button>
                <button className="bg-[#6941c6] py-3 px-5 rounded-lg text-center text-white">Sign up</button>
            </div>
        </div>
        <div className="mt-12">
            <img src={screen} className="w-[343px] md:w-[600px] lg:w-[1200px] border-4 border-[#101828] rounded-lg border-b-0" alt="" />
        </div>
        <div className="mt-12 gap-10">
            <p className="text-[#475467] font-medium text-base text-center">Join 4,000+ companies already growing</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-0 lg:flex justify-center items-center gap-3">
                <div className="flex justify-center items-center w-40 gap-1">
                    <img src={clogo} className=""  alt="company logo" />
                </div>
                <div className="flex justify-center items-center w-40 gap-1">
                    <img src={clogo2} className=""  alt="company logo" />
                </div>
                <div className="flex justify-center items-center w-40 gap-1">
                    <img src={clogo3} className=""  alt="company logo" />
                </div>
                <div className="flex justify-center items-center w-40 gap-1">
                    <img src={clogo4} className=""  alt="company logo" />
                </div>
                <div className="flex justify-center items-center w-40 gap-1">
                    <img src={clogo5} className=""  alt="company logo" />
                </div>
                <div className="flex justify-center items-center w-40 gap-1">
                    <img src={clogo6} className=""  alt="company logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero