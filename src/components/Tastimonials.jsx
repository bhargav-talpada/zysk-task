import logo from '../images/clogo5.png'
import avatar from '../images/Avatar.png'

const Tastimonials = () => {
  return (
    <div className='w-full h-auto py-28 gap-10 flex flex-col justify-center items-center bg-[#F9FAFB]'>
        <div className='flex justify-center items-center'>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex justify-center items-center'>
            <p className="text-center h-28 w-80 sm:w-[400px] md:w-[800px] lg:w-[1200px] text-[#101828] text-3xl md:text-5xl font-medium">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img className='w-16 mt-14 md:mt-6' src={avatar} alt="avtar" />
            <p className='text-[18px] font-semibold text-[#102818] pt-7'>Candice Wu</p>
            <p className='text-base font-normal text-[#475467]'>Product Manager, Sisyphus</p>
        </div>
    </div>
  )
}

export default Tastimonials