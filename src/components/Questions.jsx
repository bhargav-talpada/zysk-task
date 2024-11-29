import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import avtar from '../images/Avatar group.png'

const Questions = () => {

    const [showAnwser, setShowAnwser] = useState(false);
    const [showAnwser2, setShowAnwser2] = useState(false);
    const [showAnwser3, setShowAnwser3] = useState(false);
    const [showAnwser4, setShowAnwser4] = useState(false);
    const [showAnwser5, setShowAnwser5] = useState(false);
    const [showAnwser6, setShowAnwser6] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const handleShowAnswer1 = () => {
        setShowAnwser(!showAnwser);
      };
      const handleShowAnswer2 = () => {
        setShowAnwser2(!showAnwser2);
      };
      const handleShowAnswer3 = () => {
        setShowAnwser3(!showAnwser3);
      };
      const handleShowAnswer4 = () => {
        setShowAnwser4(!showAnwser4);
      };
      const handleShowAnswer5 = () => {
        setShowAnwser5(!showAnwser5);
      };
      const handleShowAnswer6 = () => {
        setShowAnwser6(!showAnwser6);
      };

  return (
    <div className=" w-screen h-auto flex py-16 flex-col justify-center items-center gap-7 mt-32">
          <h1 className="text-[#101828] text-[36px] font-semibold">Frequently asked questions</h1>
          <p className='text-xl font-normal text-[#475476]'>Everything you need to know about the product and billing.</p>
          <div className="flex flex-col w-screen justify-center items-center gap-3">
            <div className="w-6/12 flex flex-col items-center cursor-pointer">
              <div className="w-full h-auto lg:h-24 flex justify-between items-center" onClick={handleShowAnswer1}>
                <h1 className="text-[18px] font-medium text-[#101828]">Is there a free trial available?</h1>
                <button className="text-2xl text-[#475467] flex items-center">{!showAnwser ? <BsPlusLg /> : <RxCross1 />}</button>
              </div>
              {
                showAnwser &&
                <div className="w-full flex flex-col items-center mt-1 gap-6">
                  <p className="text-base font-normal text-[#475467]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
              }
                <hr className='w-full border-1 border-gray-400 font-extrabold' />
            </div>
            <div className="w-6/12 flex flex-col items-center cursor-pointer">
              <div className="w-full h-auto lg:h-24 flex justify-between items-center" onClick={handleShowAnswer2}>
                <h1 className="text-[18px] font-medium text-[#101828]">Can I change my plan later?</h1>
                <button className="text-2xl text-[#475467] flex items-center">{!showAnwser2 ? <BsPlusLg /> : <RxCross1 />}</button>
              </div>
              {
                showAnwser2 &&
                <div className="w-full flex flex-col items-center mt-1 gap-6">
                  <p className="text-base font-normal text-[#475467]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
              }
                <hr className='w-full border-1 border-gray-400 font-extrabold' />
            </div>
            <div className="w-6/12 flex flex-col items-center cursor-pointer">
              <div className="w-full h-auto lg:h-24 flex justify-between items-center" onClick={handleShowAnswer3}>
                <h1 className="text-[18px] font-medium text-[#101828]">What is your cancellation policy?</h1>
                <button className="text-2xl text-[#475467] flex items-center">{!showAnwser3 ? <BsPlusLg /> : <RxCross1 />}</button>
              </div>
              {
                showAnwser3 &&
                <div className="w-full flex flex-col items-center mt-1 gap-6">
                  <p className="text-base font-normal text-[#475467]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
              }
                <hr className='w-full border-1 border-gray-400 font-extrabold' />
            </div>
            <div className="w-6/12 flex flex-col items-center cursor-pointer">
              <div className="w-full h-auto lg:h-24 flex justify-between items-center" onClick={handleShowAnswer4}>
                <h1 className="text-[18px] font-medium text-[#101828]">Can other info be added to an invoice?</h1>
                <button className="text-2xl text-[#475467] flex items-center">{!showAnwser4 ? <BsPlusLg /> : <RxCross1 />}</button>
              </div>
              {
                showAnwser4 &&
                <div className="w-full flex flex-col items-center mt-1 gap-6">
                  <p className="text-base font-normal text-[#475467]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
              }
                <hr className='w-full border-1 border-gray-400 font-extrabold' />
            </div>
            <div className="w-6/12 flex flex-col items-center cursor-pointer">
              <div className="w-full h-auto lg:h-24 flex justify-between items-center" onClick={handleShowAnswer5}>
                <h1 className="text-[18px] font-medium text-[#101828]">How does billing work?</h1>
                <button className="text-2xl text-[#475467] flex items-center">{!showAnwser5 ? <BsPlusLg /> : <RxCross1 />}</button>
              </div>
              {
                showAnwser5 &&
                <div className="w-full flex flex-col items-center mt-1 gap-6">
                  <p className="text-base font-normal text-[#475467]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
              }
                <hr className='w-full border-1 border-gray-400 font-extrabold' />
            </div>
            <div className="w-6/12 flex flex-col items-center cursor-pointer">
              <div className="w-full h-auto lg:h-24 flex justify-between items-center" onClick={handleShowAnswer6}>
                <h1 className="text-[18px] font-medium text-[#101828]">How do I change my account email?</h1>
                <button className="text-2xl text-[#475467] flex items-center">{!showAnwser6 ? <BsPlusLg /> : <RxCross1 />}</button>
              </div>
              {
                showAnwser6 &&
                <div className="w-full flex flex-col items-center mt-1 gap-6">
                  <p className="text-base font-normal text-[#475467]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
              }
                <hr className='w-full border-1 border-gray-400 font-extrabold' />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-5 mt-20">
            <img src={avtar} alt="avtar" />
            <p className="text-[#101828] text-center text-xl font-semibold">Still have questinos?</p>
            <p className="text-[#475467] text-center text-lg font-normal">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button className="bg-[#6941c6] py-3 px-5 rounded-lg text-center text-white">Get in touch</button>
          </div>
        </div>
  )
}

export default Questions