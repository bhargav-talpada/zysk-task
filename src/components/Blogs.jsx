import blog1 from '../images/blog1.png'
import bavtar1 from '../images/bavatar1.png'
import blog2 from '../images/blog2.png'
import bavtar2 from '../images/bavatar2.png'
import blog3 from '../images/blog3.png'
import bavtar3 from '../images/bavatar3.png'
import { MdArrowOutward } from 'react-icons/md'

const Blogs = () => {
  return (
    <div className='w-full py-40 flex flex-col justify-center items-center'>
        <div className='w-9/12 flex flex-col justify-center items-start gap-5'>
            <div className='w-10/12 flex justify-between items-center'>
                <h1 className='text-base font-semibold text-[#6941C6]'>Our Blog</h1>
                <button className='hidden md:block px-5 py-2 bg-[#7F56D9] text-white rounded-md'>View all posts</button>
            </div>
            <h1 className='text-[36px] font-semibold leading-10 text-[#101828]'>Lastest blog posts</h1>
            <p className='text-xl font-normal text-[#475467] leading-7'>Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <div className='w-9/12 flex flex-col md:flex-row justify-center items-start gap-20 pt-10'>
            <div className='w-96 h-[444px] flex flex-col justify-center gap-5'>
                <img src={blog1} alt="blog" className='w-96 h-60' />
                <h2 className='text-sm font-semibold text-[#6741C8] '>Design</h2>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold text-[#101828] leading-7'>UX review presentations</h2>
                    <MdArrowOutward />
                </div>
                <p className='text-base font-normal text-[#475467] leading-6 w-full'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                <div className='flex justify-start items-center gap-3'>
                    <img src={bavtar1} alt="blog avtar" />
                    <div className='flex flex-col items-start justify-center gap-1'>
                        <h2 className='text-sm font-semibold text-[#101828] leading-4'>Olivia Rhye</h2>
                        <h4 className='text-sm font-normal text-[#475467] leading-4'>20 Jan 2024</h4>
                    </div>
                </div>
            </div>
            <div className='w-96 h-[444px] flex flex-col justify-center gap-5'>
                <img src={blog2} alt="blog" className='w-96 h-60' />
                <h2 className='text-sm font-semibold text-[#6741C8] '>Products</h2>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold text-[#101828] leading-7'>Migrating to Linear 101</h2>
                    <MdArrowOutward />
                </div>
                <p className='text-base font-normal text-[#475467] leading-6 w-full'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                <div className='flex justify-start items-center gap-3'>
                    <img src={bavtar2} alt="blog avtar" />
                    <div className='flex flex-col items-start justify-center gap-1'>
                        <h2 className='text-sm font-semibold text-[#101828] leading-4'>Phoenix Baker</h2>
                        <h4 className='text-sm font-normal text-[#475467] leading-4'>19 Jan 2024</h4>
                    </div>
                </div>
            </div>
            <div className='w-96 h-[444px] flex flex-col justify-center gap-5'>
                <img src={blog3} alt="blog" className='w-96 h-60' />
                <h2 className='text-sm font-semibold text-[#6741C8] '>Software Engineering</h2>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold text-[#101828] leading-7'>Building your API stack</h2>
                    <MdArrowOutward />
                </div>
                <p className='text-base font-normal text-[#475467] leading-6 w-full'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                <div className='flex justify-start items-center gap-3'>
                    <img src={bavtar3} alt="blog avtar" />
                    <div className='flex flex-col items-start justify-center gap-1'>
                        <h2 className='text-sm font-semibold text-[#101828] leading-4'>Lana Steiner</h2>
                        <h4 className='text-sm font-normal text-[#475467] leading-4'>18 Jan 2024</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs