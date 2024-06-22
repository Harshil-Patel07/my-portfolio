"use client"
import React, { useState, useEffect } from 'react'
import HandIcon from '../components/common/Icons/handIcon'
import { hello } from '../../../database/hello'

const ContactPage = () => {
  const [random, setRandom] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRandom((prev) => (prev + 1) % hello.length)
        setFade(true)
      }, 1000) 
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='bg-brand-black text-white container mx-auto px-6 py-12 font-Poppins'>
      <div className='text-center mb-8'>
        <h1 className={`text-[60px] font-PlayWrite capitalize flex items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          {hello[random]?.hello}.
          <HandIcon className="-rotate-45 ml-4 animate-shake [&>svg]:w-[50px] [&>svg]:h-[50px]" />
        </h1>
        <h3 className='text-2xl mt-4 font-PlayWrite'>Send us a message! Get in touch to discuss your project.</h3>
        <p className='text-lg mt-2 max-w-[50rem] mx-auto text-brand-gray'>
          We want to learn more about your requirements and talk about how our services will work for you. Fill out the form below and we will get back to you within 24 business hours.
        </p>
      </div>

      <div className='max-w-2xl mx-auto'>
        <form className='space-y-6'>
          <div>
            <input 
              type="text" 
              placeholder='Name' 
              className='w-full px-4 py-2 border-[0.5px] border-brand-gray rounded-md bg-brand-lightBlack focus:outline-none focus:border-brand-gray font-PlayWrite'
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder='Email address' 
              className='w-full px-4 py-2 border-[0.5px] border-brand-gray rounded-md bg-brand-lightBlack focus:outline-none focus:border-brand-gray font-PlayWrite'
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder='Phone number' 
              className='w-full px-4 py-2 border-[0.5px] border-brand-gray rounded-md bg-brand-lightBlack focus:outline-none focus:border-brand-gray font-PlayWrite'
            />
          </div>
          <div>
            <textarea 
              placeholder='Enter your message...' 
              className='w-full px-4 py-2 border-[0.5px] border-brand-gray rounded-md bg-brand-lightBlack focus:outline-none focus:border-brand-gray font-PlayWrite'
            />
          </div>
          <div className='flex items-center'>
            <input type="checkbox" className='mr-2' />
            <label className='text-gray-400 font-PlayWrite'>I agree to the terms and conditions</label>
          </div>
          <div>
            <button 
              type="submit" 
              className='w-full px-4 py-2 bg-brand-gray text-white rounded-md hover:bg-brand-darkGray transition-colors'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
