import Image from 'next/image'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import BlogsListingCard from '../BlogsListingCard'

const BlogsListingSection = () => {

    const categoryData = [
        {
            name: "Technology"
        },
        {
            name: "Politics"
        },
        {
            name: "Health"
        },
        {
            name: "Environment"
        },
        {
            name: "Sports"
        },
        {
            name: "News"
        },
        {
            name: "Story"
        }
    ]
    return (
        <div className=''>
            <div className='container pt-20'>
                <h2 className="text-3xl font-bold text-center flex items-center justify-center w-full bg-gradient-to-l from-[#7A87FB] to-[#FFD49C] text-transparent bg-clip-text gap-5 uppercase tracking-widest pb-12">
                    <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
                    Discover the Best Blogs
                    <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
                </h2>

                <div className='flex'>
                    <div className='flex items-center gap-2 w-full flex-wrap'>
                        <button className=' border-[1.5px]  py-3 px-5 rounded-lg flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray hover:text-white  hover:bg-brand-lightBlack transition-all duration-200 ease-linear w-fit '>
                            All
                        </button>
                        {
                            categoryData?.map((item,index) => (
                                <button
                                key={index}
                                className=' border-[1.5px]  py-3 px-5 rounded-lg flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray hover:text-white hover:bg-brand-lightBlack transition-all duration-200 ease-linear w-fit '>
                                    {item.name}
                                </button>
                            ))
                        }


                    </div>
                    <div className='group relative w-full max-w-[12rem] pb-3 '>
                        <button className=' border-[1.5px]  py-3 px-5 rounded-lg flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear w-full hover:text-white '>
                            Technology
                            <FaChevronDown className='group-hover:rotate-180' />
                        </button>
                        <div className='p-3 shadow-brand-lightBlack top-[100%] absolute w-full group-hover:opacity-100 opacity-0 hidden group-hover:block bg-brand-lightBlack rounded-lg'>
                            {
                                categoryData?.map((item,index) => (
                                    <button key={index} className=' w-full hover:text-white hover:scale-110  py-3 px-5  flex items-center justify-center gap-2 normalText  text-brand-gray transition-all duration-200 ease-linear   '>
                                        {item.name}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>


            </div>


            <div className='container py-20 '>
                <BlogsListingCard />
                <BlogsListingCard />
                <BlogsListingCard />
                <BlogsListingCard />
                <BlogsListingCard />
                <BlogsListingCard />
                <BlogsListingCard />
                <BlogsListingCard />
            </div>


            <button className='  mx-auto p-[1px] w-fit rounded-full flex items-center justify-center gap-2 normalText  text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear  normalText  bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C]  button-hover 
            '>
                <span className='bg-brand-black py-3 px-20  rounded-full hover:bg-transparent hover:text-brand-black  font-Poppins font-medium transition-colors duration-200 ease-linear '>
                    Load More
                </span>
            </button>






        </div>
    )
}




export default BlogsListingSection
