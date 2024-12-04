import { FaRegPlayCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import screen from '../images/Screen mockup (REPLACE FILL).png'
import screen1 from '../images/Content.png'
import clogo from '../images/Fictional company logo1.png'
import clogo2 from '../images/Fictional company logo2.png'
import clogo3 from '../images/Fictional company logo.png'
import clogo4 from '../images/Fictional company logo4.png'
import clogo5 from '../images/Fictional company logo5.png'
import clogo6 from '../images/Fictional company logo 6.png'

const Hero = () => {

    const logos = [
        {
            id: 1,
            src: clogo
        },
        {
            id: 2,
            src: clogo2
        },
        {
            id: 3,
            src: clogo3
        },
        {
            id: 4,
            src: clogo4
        },
        {
            id: 5,
            src: clogo5
        },
        {
            id: 6,
            src: clogo6
        }
    ]

  return (
    <div className='w-full h-auto bg-white flex flex-col justify-center items-center mt-28'>
        <div className='flex flex-col justify-center items-center gap-5 px-2'>
            <div className='w-96 flex justify-center items-center border rounded-3xl border-[#6941c6] '>
                <div className="border rounded-xl border-[#6941c6] px-2  my-1 mr-5">
                    <h1 className="text-[#6941c6] font-semibold">New feature</h1>
                </div>
                <p className="flex justify-center items-center text-[#6941c6] font-semibold">Check out the team dashboard <FiArrowRight /> </p>
            </div>
            <p className="px-2 text-[36px] text-center font-bold">Beautiful analytics to grow smarter</p>
            <p className="w-auto sm:w-96 md:w-[700px] text-center text-[#475467] text-[20px] font-normal">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div className="w-10/12 flex flex-col-reverse md:flex-row justify-center items-center gap-5 mt-5">
                <button className="w-full md:w-36 flex justify-center items-center py-3 px-5 rounded-lg text-center text-[#344054] border border-[#6941c6] gap-1 text-lg font-semibold"> <FaRegPlayCircle /> Demo</button>
                <button className="w-full md:w-36 bg-[#6941c6] py-3 px-5 rounded-lg text-center text-white text-lg font-semibold">Sign up</button>
            </div>
        </div>
        <div className="mt-12">
            <img src={screen} className="hidden md:block w-[343px] md:w-[600px] lg:w-[1200px] border-4 border-[#101828] rounded-lg border-b-0" alt="" />
            <img src={screen1} className="md:hidden w-full" alt="" />
        </div>
        <div className="md:pt-20 gap-10">
            <p className="text-[#475467] font-medium text-base text-center ">Join 4,000+ companies already growing</p>
            <div className="grid grid-cols-2 lg:grid-cols-0 lg:flex justify-center items-center gap-12 py-10">
                {
                    logos.map((logo) => (
                        <div className="flex justify-center items-center w-40 gap-1" key={logo.id}>
                            <img src={logo.src} className=""  alt="company logo" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Hero