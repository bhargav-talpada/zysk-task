import logo from '../images/Logo wrap.png'


const Footer = () => {
  return (
    <div className='w-full h-[400px] flex flex-col justify-evenly items-center mt-20 gap-5'>
        <div className='w-10/12 grid grid-cols-2  lg:flex justify-evenly items-center gap-10 lg:gap-0'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-sm font-semibold text-[#667085]'>Product</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Overview</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Features</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Solutions</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Tutorials</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Pricing</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Releases</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-sm font-semibold text-[#667085]'>Company</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>About us</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>careers</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Press</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>News</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Media kit</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Contact</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-sm font-semibold text-[#667085]'>Resources</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Blog</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Newslatter</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Events</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Help center</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Tutorials</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Supports</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-sm font-semibold text-[#667085]'>Use Cases</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Startups</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Enterprice</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Goverments</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Saas Center</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Marketplaces</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Eccomerce</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-sm font-semibold text-[#667085]'>Social</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Twitter</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Linkedin</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Facebook</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Github</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>AngelList</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Dribble</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-sm font-semibold text-[#667085]'>Legal</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Terms</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Privacy</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Cookies</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Licenses</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Settings</h2>
                <h2 className='text-balance font-semibold text-[#475467]'>Contact</h2>
            </div>
        </div>
        <hr className='w-9/12 border-1 border-gray-400 font-extrabold' />
        <div className='w-9/12 flex flex-col md:flex-row justify-between items-center gap-5 pb-5'>
            <img src={logo} alt="logo" />
            <p className='text-[#667085] text-xs md:text-base font-normal'>© 2077 Untitled UI. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer