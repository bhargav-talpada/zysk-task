import blog1 from '../images/blog1.png'
import bavtar1 from '../images/bavatar1.png'
import blog2 from '../images/blog2.png'
import bavtar2 from '../images/bavatar2.png'
import blog3 from '../images/blog3.png'
import bavtar3 from '../images/bavatar3.png'
import { MdArrowOutward } from 'react-icons/md'

const Blogs = () => {

    const blogs = [
        {
            id: 1,
            src: blog1,
            h2: "Design",
            title: "UX review presentations",
            description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
            avatar: bavtar1,
            writer: "Olivia Rhye",
            date: "20 Jan 2024"
        },
        {
            id: 2,
            src: blog2,
            h2: "Product",
            title: "Migrating to Linear 101",
            description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            avatar: bavtar2,
            writer: "Phoenix Baker",
            date: "19 Jan 2024"
        },
        {
            id: 3,
            src: blog3,
            h2: "Software Engineering",
            title: "Building your API stack",
            description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            avatar: bavtar3,
            writer: "Lana Steiner",
            date: "18 Jan 2024"
        }
    ]

  return (
    <div className='w-full py-40 flex flex-col justify-center items-center'>
        <div className='w-10/12 md:w-9/12 flex flex-col justify-center items-start gap-5'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-base font-semibold text-[#6941C6]'>Our Blog</h1>
                <button className='hidden md:block px-5 py-2 bg-[#7F56D9] text-white rounded-md'>View all posts</button>
            </div>
            <h1 className='text-3xl md:text-[36px] font-semibold text-[#101828]'>Lastest blog posts</h1>
            <p className='text-lg md:text-xl font-normal text-[#475467]'>Tool and strategies modern teams need to help their companies grow.</p>
        </div>
        <div className='w-10/12 md:w-9/12 flex flex-col md:flex-row justify-center items-center gap-20 pt-10'>
            {
                blogs.map((blog) => (
                    <div className='flex flex-col justify-center gap-5' key={blog.id}>
                        <img src={blog.src} alt="blog" className='' />
                        <h2 className='text-sm font-semibold text-[#6741C8] '>{blog.h2}</h2>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-2xl font-semibold text-[#101828]'>{blog.title}</h2>
                            <MdArrowOutward />
                        </div>
                        <p className='text-base font-normal text-[#475467] w-full'>{blog.description}</p>
                        <div className='flex justify-start items-center gap-3'>
                            <img src={blog.avatar} alt="blog avtar" />
                            <div className='flex flex-col items-start justify-center gap-1'>
                                <h2 className='text-sm font-semibold text-[#101828]'>{blog.writer}</h2>
                                <h4 className='text-sm font-normal text-[#475467] '>{blog.date}</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
            <button className='md:hidden w-full px-5 py-2 bg-[#7F56D9] text-white rounded-md'>View all posts</button>
        </div>
    </div>
  )
}

export default Blogs