import Image from 'next/image'
import React from 'react'

const BlogDetailPage = () => {
  return (
    <div className=' text-white'>
<div className='relative'>
<Image src={"/images/blogListringHero.png"} width={1440} height={400} alt='image' className='w-full max-h-[70vh]' />
      <h1 className='text-[64px] font-medium max-w-[800px] p-3 absolute bottom-0'>
      The Rise of Artificial Intelligence in Healthcare
      </h1>
</div>
    </div>
  )
}

export default BlogDetailPage
