import message from '../images/message-chat-circle.png'
import message2 from '../images/Featured icon1.png'
import message3 from '../images/Featured icon 2.png'
import message4 from '../images/Featured icon3.png'
import message5 from '../images/Featured icon 4.png'
import message6 from '../images/Featured icon 5.png'

const Features = () => {

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
        {
            id: 4,
            src: message4,
            title: "Connect with customers",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
        },
        {
            id: 5,
            src: message5,
            title: "Connect the tools you already use",
            description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
        },
        {
            id: 6,
            src: message6,
            title: "Our people make the difference",
            description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
        }
    ]

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
        <div className='h-96 flex flex-col justify-center items-center gap-3'>
            <p className="text-base font-semibold text-[#6941c8]">Features</p>
            <p className="w-full text-center text-[#101828] text-[36px] font-semibold">Analytics that feels like it’s from the future</p>
            <p className='leading-7 w-full sm:w-96 md:w-[700px] text-center text-[#475468] text-[20px] font-normal'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-14'>
            {
                messages.map((m) => (
                    <div className='flex flex-col justify-center items-center' key={m.id}>
                        <img src={m.src} alt="message" />
                        <h1 className='text-[#101828] text-center text-base md:text-xl font-semibold'>{m.title}</h1>
                        <p className='text-center lg:w-96 text-[#475467]  text-base font-normal'>{m.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features