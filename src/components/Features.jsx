import message from '../images/message-chat-circle.png'
import message2 from '../images/Featured icon1.png'
import message3 from '../images/Featured icon 2.png'
import message4 from '../images/Featured icon3.png'
import message5 from '../images/Featured icon 4.png'
import message6 from '../images/Featured icon 5.png'

const Features = () => {
  return (
    <div className='w-full h-auto px-10 sm:px-20 flex flex-col justify-center items-center'>
        <div className='h-96 flex flex-col justify-center items-center gap-3'>
            <p className="text-base font-semibold text-[#6941c8]">Features</p>
            <p className="text-center text-[#101828] text-xl sm:text-3xl md:text-[36px] font-normal">Analytics that feels like it’s from the future</p>
            <p className='leading-7 w-52 sm:w-96 md:w-[700px] text-center text-[#475468] text-[20px] font-normal'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center'>
            <div className='flex flex-col justify-center items-center mt-5'>
                <img src={message} alt="message" />
                <h1 className='text-[#101828] text-[19px] md:text-xl font-semibold'>Share team inboxes</h1>
                <p className='text-center w-48 sm:w-72 md:w-96 text-[#475467]  text-base font-normal'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={message2} alt="message" />
                <h1 className='text-[#101828] text-[19px] md:text-xl font-semibold'>Deliver instant answers</h1>
                <p className='text-center w-48 sm:w-72 md:w-96 text-[#475467]  text-base font-normal'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={message3} alt="message" />
                <h1 className='text-[#101828] text-[19px] md:text-xl font-semibold'>Manage your team with reports</h1>
                <p className='text-center w-48 sm:w-72 md:w-96 text-[#475467]  text-base font-normal'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <img src={message4} alt="message" />
                <h1 className='text-[#101828] text-[19px] md:text-xl font-semibold'>Connect with customers</h1>
                <p className='text-center w-48 sm:w-72 md:w-96 text-[#475467]  text-base font-normal'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <img src={message5} alt="message" />
                <h1 className='text-[#101828] text-[19px] md:text-xl font-semibold'>Connect the tools you already use</h1>
                <p className='text-center w-48 sm:w-72 md:w-96 text-[#475467]  text-base font-normal'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <img src={message6} alt="message" />
                <h1 className='text-[#101828] text-[19px] md:text-xl font-semibold'>Our people make the difference</h1>
                <p className='text-center w-48 sm:w-72 md:w-96 text-[#475467]  text-base font-normal'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
            </div>
        </div>
    </div>
  )
}

export default Features