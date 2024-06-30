"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { WhyChooseMeData } from '../../../../database/whyChooseMe'
import usePopup from '../../../../hooks/usePopup';
import { FaAnglesRight } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import lottie from 'lottie-web';


const WhyChooseMe: React.FC = () => {
  const { intro, points, title }: WhyChooseMeData = WhyChooseMeData;
  const { isOpen, content, openPopup, closePopup } = usePopup();

  const animationRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    points.forEach((point, index) => {
      const animationContainer = animationRefs.current[index];
      if (animationContainer) {
        lottie.loadAnimation({
          container: animationContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: point.lottie,
        });
      }
    });
  }, [points]);

  return (
    <div className='py-[5rem] bg-brand-black flex flex-col items-center font-Poppins text-white'>
      <div className='font-Poppins text-white'>
        <h2 className="text-3xl font-bold text-center flex items-center justify-center w-full bg-gradient-to-l from-[#7A87FB] to-[#FFD49C] text-transparent bg-clip-text gap-5 uppercase tracking-widest pb-4">
          <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
          {title}
          <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
        </h2>
        <p className="max-w-xl text-center mx-auto mb-[4rem] text-brand-gray">{intro}</p>
      </div>

      <ul className="gap-4 container">
        {points.map((point, index) => {
          let num = (index + 1) < 10 ? "0" + (index + 1) : index + 1;

          return (
            <li
              key={index}
              className="py-[5rem] bg-brand-black sticky top-0 px-6 gap-3 flex odd:flex-row even:flex-row-reverse"
            >
              <div className='flex flex-col items-start justify-center gap-3'>
                <span className="flex items-center gap-2 text-[1.4rem] font-Poppins bg-gradient-to-t from-[#7A87FB] to-[#FFD49C] text-transparent bg-clip-text">
                <Image
                    src="/images/starVector.svg"
                    alt="image"
                    width={31}
                    height={31}
                    className=" animate-shake"
                  />
                  {num}
                 
                </span>
                <h4 className="font-medium font-PlayWrite text-[1.5rem]">{point.title}</h4>
                <p className='normalText text-brand-gray font-Poppins'>{point.description}</p>
                <button
                  onClick={() => openPopup({ ...point, id: index })}
                  className='normalText text-brand-black bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] py-3 px-7 rounded-full button-hover'>
                  Read More
                </button>
              </div>

              <div className='h-full w-full relative'>
                <div ref={(el: any) => animationRefs.current[index] = el!} className='[&>*:nth-child(2)]:hidden'></div>
              </div>
            </li>
          );
        })}
      </ul>

      {isOpen && content && (
        <div className={`fixed inset-0 bg-[black]/50 flex items-center justify-center p-4 z-[999]`}>
          <button
            className="absolute top-4 right-4 text-white bg-gradient-to-t from-[#7A87FB] to-[#FFD49C] rounded-full p-2"
            onClick={closePopup}
          >
            <IoClose className='text-brand-black' />
          </button>
          <div className="bg-white text-black p-8 rounded-lg max-w-[85vw] w-full max-h-[90vh] overflow-auto relative">
            <h2 className="text-2xl font-bold">{content.title}</h2>
            <p className="mt-4">{content.description}</p>
            {content.content.map((item: any, index: number) => (
              <div key={index} className="mt-6">
                <h3 className="text-xl font-semibold flex gap-2 items-start">
                  <FaAnglesRight />{item.heading}
                </h3>
                <p className="mt-2 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WhyChooseMe;
