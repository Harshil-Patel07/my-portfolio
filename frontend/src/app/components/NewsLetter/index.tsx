"use client"
import React from 'react'
import HandIcon from '../common/Icons/handIcon'
import Calender from '../common/Icons/calender'
import { useParams, usePathname, useSearchParams } from 'next/navigation'


const NewsLetter = () => {
    const router = usePathname()
    const { slug } = useParams()
    const innerPage = router + (slug ? `/${slug}` : '')
    return (
        <div>
            
                  {(router === '/blogs' || innerPage.startsWith('/blogs/')) && (
                    <div className="relative container py-16 sm:py-24 lg:py-32 font-Poppins flex gap-20  items-center justify-center  " >


                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-bold font-PlayWrite tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="text-[20px] font-normal font-Poppins leading-[150%] text-brand-gray mt-4 ">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
                            <div className="mt-6 flex  gap-x-4">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-brand-lightBlack px-3.5 py-2 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none" placeholder="Enter your email" />

                                <button className=' bg-gradient w-fit font-Poppins font-medium transition-all duration-200 ease-linear rounded-lg px-3.5 py-2.5 text-[1.2rem]  text-brand-black bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] button-hover '>
                                    Subscribe
                                </button>


                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-brand-lightBlack p-2 ring-1 ring-brand-darkGray">
                                    <Calender />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                                <dd className="mt-2 text-[1.1rem] leading-7 text-brand-gray">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-brand-lightBlack p-2 ring-1 ring-brand-darkGray ">
                                    <HandIcon />
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-[1.1rem] text-brand-gray">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
                            </div>
                        </dl>
                    </div>
                )
            }
        </div>



    )
}

export default NewsLetter
