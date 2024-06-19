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
        <div className='py-20'>
            <div className='container'>

                <h2 className="text-3xl font-bold  text-center  flex items-center justify-center w-full  pb-[5rem]  gap-5 uppercase tracking-widest text-white">
                    Discover the Best Blogs
                </h2>

                <div className='flex'>
                    <div className='flex items-center gap-2 w-full flex-wrap'>
                    <button className=' border-[1.5px]  py-3 px-5 rounded-lg flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray hover:text-white  hover:bg-brand-lightBlack transition-all duration-200 ease-linear w-fit '>
                                  All
                                </button>
                        {
                            categoryData.map((item) => (
                                <button className=' border-[1.5px]  py-3 px-5 rounded-lg flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray hover:text-white hover:bg-brand-lightBlack transition-all duration-200 ease-linear w-fit '>
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
                            categoryData.map((item) => (
                                <button className=' w-full hover:text-white hover:scale-110  py-3 px-5  flex items-center justify-center gap-2 normalText  text-brand-gray transition-all duration-200 ease-linear   '>
                                    {item.name}
                                </button>
                            ))
                        }
                        </div>
                    </div>
                </div>


            </div>


            <div className='container py-20 '>
            <BlogsListingCard/>
            <BlogsListingCard/>
            <BlogsListingCard/>
            <BlogsListingCard/>
            <BlogsListingCard/>
            <BlogsListingCard/>
            <BlogsListingCard/>
            <BlogsListingCard/>
            </div>
        </div>
    )
}




export default BlogsListingSection
