import Image from 'next/image'
import React from 'react'

const OurProcess = () => {



  return (
    <div className='min-h-screen'>
        <h2 className="text-3xl font-bold mb-8 text-center  flex items-center justify-center w-full  pb-[5rem] bg-gradient-to-l from-[#7A87FB]  to-[#FFD49C] text-transparent bg-clip-text gap-5 uppercase tracking-widest">
            <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
      Our Process
            <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
            </h2>
    </div>
  )
}

export default OurProcess
