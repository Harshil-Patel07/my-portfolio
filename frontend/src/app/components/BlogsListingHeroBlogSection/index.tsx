import Image from 'next/image'
import React from 'react'

const BlogsListingHeroBlogSection = () => {
    return (
        <div className=' text-white font-Poppins py-20 border-b border-t border-brand-lightBlack'>
            <div className=' container flex items-start gap-20'>
                <Image src={"/images/blogListringHero.png"} width={515} height={427} alt="image" />
                <div className='flex flex-col gap-[32px]'>
                    <h2 className='text-[32px] font-Poppins text-white font-semibold'>Global Cli mate Summit Addresses Urgent Climate Action</h2>
                    <p className='text-[20px] font-normal font-Poppins leading-[150%] text-brand-gray'>World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</p>

                    <div className='flex gap-10'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-brand-gray font-normal'>
                                Category
                            </span>
                            <span className='text-white font-normal'>
                                Environment
                            </span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-brand-gray font-normal'>
                                Publication Date
                            </span>
                            <span className='text-white font-normal'>
                                October 10, 2023
                            </span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-brand-gray font-normal'>
                                Author
                            </span>
                            <span className='text-white font-normal'>
                                Jane Smith
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                        <button className=' border-[1.5px] w-fit py-3 px-5 rounded-full flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear '>
                                <Image src={"/images/likeIcon.svg"} width={24} height={24} alt='like button' className='hover:' />
                                14 k
                            </button>
                            <button className=' border-[1.5px] w-fit py-3 px-5 rounded-full flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear '>  <Image src={"/images/shareIcon.svg"} width={17} height={17} alt='like button' />
                                204
                            </button>
                        </div>
                        <button className=' border-[1.5px] w-fit py-3 px-5 rounded-lg flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear '>
                            Read More
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BlogsListingHeroBlogSection
