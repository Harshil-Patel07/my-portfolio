"use client"
import Image from 'next/image'
import React  from 'react'
import { WhyChooseMeData } from '../../../../database/whyChooseMe'
import usePopup from '../../../../hooks/usePopup';
import { FaAnglesRight } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const WhyChooseMe = () => {
  const { intro, points, title }: WhyChooseMeData = WhyChooseMeData
  const { isOpen, content, openPopup, closePopup } = usePopup()

  return (
    <div className='min-h-screen py-[5rem] bg-brand-black flex flex-col items-center font-Poppins text-white'>
      <div className='font-Poppins text-white'>
        <h2 className="text-3xl font-bold text-center flex items-center justify-center w-full bg-gradient-to-l from-[#7A87FB] to-[#FFD49C] text-transparent bg-clip-text gap-5 uppercase tracking-widest pb-4">
          <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
          {title}
          <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
        </h2>
        <p className="max-w-xl text-center mx-auto mb-[4rem] text-brand-gray">{intro}</p>
      </div>

      <ul className="grid grid-cols-2 gap-4 container">
        {points.map((point, index) => {
          let num = (index + 1) < 10 ? "0" + (index + 1) : index + 1;
          return (
            <li
              key={index}
              onClick={() => openPopup({ ...point, id: index })}
              className="border-[1px] border-brand-lightBlack hover:border-brand-gray hover:shadow-lg py-6 px-6 flex flex-col gap-3 transition-colors duration-200 ease-linear cursor-pointer"
            >
              <span className="text-[1.4rem] font-Poppins bg-gradient-to-t from-[#7A87FB] to-[#FFD49C] text-transparent bg-clip-text">
                {num}
              </span>
              <h4 className="font-medium font-PlayWrite text-[1.5rem]">{point.title}</h4>
              <p className='normalText text-brand-gray font-Poppins'>{point.description}</p>
            </li>
          );
        })}
      </ul>

      {isOpen && content && (
        <div className={`fixed inset-0  bg-[black]/50 flex items-center justify-center p-4 z-50 `}>
          <button
            className="absolute top-4 right-4 text-white bg-gradient-to-t from-[#7A87FB] to-[#FFD49C] rounded-full p-2"
            onClick={closePopup}
          >
            <IoClose className='text-brand-black' />
          </button>
          <div className="bg-white text-black p-8 rounded-lg max-w-[85vw] w-full max-h-[90vh] overflow-auto relative" >

            <h2 className="text-2xl font-bold  ">{content.title}</h2>
            <p className="mt-4">{content.description}</p>
            {content.content.map((item: any, i: number) => (
              <div key={i} className="mt-6">
                <h3 className="text-xl font-semibold   flex gap-2 items-start " ><FaAnglesRight />{item.heading}</h3>
                <p className="mt-2 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default WhyChooseMe
