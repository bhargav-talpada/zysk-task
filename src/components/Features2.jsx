import screen from '../images/mobile.png'
import phone from '../images/iPhone 12 Pro mockup.png'
import message from '../images/message-chat-circle.png'
import message2 from '../images/Featured icon1.png'
import message3 from '../images/Featured icon 2.png'

const Features2 = () => {

    const messages = [
        {
            id: 1,
            src: message,
            title: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            id: 2,
            src: message2,
            title: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            id: 3,
            src: message3,
            title: "Manage your team with reports",
            description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        },
    ]

  return (
    <div className='w-full h-auto px-10 sm:px-20 flex flex-col justify-center items-center gap-5'>
        <div className='h-96 flex flex-col justify-center items-center gap-3'>
            <p className="text-base font-semibold text-[#6941c8]">Features</p>
            <p className="text-center text-[#101828] text-[28px] md:text-[36px] font-bold">Cutting-edge features for advanced analytics</p>
            <p className='w-auto sm:w-96 md:w-[700px] text-center text-[#475468] text-[20px] font-normal'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className="w-full flex justify-center items-center">
            <img src={screen} className="hidden md:block" alt="" />
            <img src={phone} className="md:hidden" alt="" />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-14'>
        {
            messages.map((m) => (
                <div className='flex flex-col justify-center items-center' key={m.id}>
                    <img src={m.src} alt="message" />
                    <h1 className='text-[#101828] text-[19px] md:text-xl font-semibold'>{m.title}</h1>
                    <p className='text-center lg:w-96 text-[#475467]  text-base font-normal'>{m.description}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Features2