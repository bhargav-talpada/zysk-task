import screen from '../images/Screen mockup (REPLACE FILL).png'
import phone from '../images/iPhone mockup.png'
import iscreen from '../images/Mockup wrap.png'
import message from '../images/message-chat-circle.png'
import message2 from '../images/Featured icon1.png'
import message3 from '../images/Featured icon 2.png'

const Features2 = () => {
  return (
    <div className='w-full h-auto px-10 sm:px-20 flex flex-col justify-center items-center'>
        <div className='h-96 flex flex-col justify-center items-center gap-3'>
            <p className="text-base font-semibold text-[#6941c8]">Features</p>
            <p className="text-center text-[#101828] text-xl sm:text-3xl md:text-[36px] font-semibold">Cutting-edge features for advanced analytics</p>
            <p className='leading-7 w-52 sm:w-96 md:w-[700px] text-center text-[#475468] text-[20px] font-normal'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className="">
            <img src={screen} className=" hidden lg:block w-[768px] h-[512px] border-4 border-[#101828] rounded-lg" alt="" />
        </div>
        <div className='relative md:absolute left-12 sm:left-32 md:left-64 md:mt-[600px]'>
            <img src={phone} alt="iphone" />
        </div>
        <div className='absolute left-[195px] md:left-[268px] mt-[380px] md:mt-[600px]'>
            <img src={iscreen} alt="iscreen"  className='rounded-3xl'/>
        </div>
    </div>
  )
}

export default Features2