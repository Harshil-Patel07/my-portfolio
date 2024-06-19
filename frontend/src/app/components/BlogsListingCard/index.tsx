import Image from "next/image"
import { FaChevronDown } from "react-icons/fa"

const BlogsListingCard = () => {
    const blogCategory = [
      
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
        <div className="flex mb-8 gap-8">

            <Image src={"/images/blogListringHero.png"} width={515} height={427} alt="image" />
            <div className="border  border-brand-darkGray py-8 rounded-lg px-8 flex flex-col gap-4 ">
                <div className='text-[20px] font-normal font-Poppins leading-[150%] text-brand-gray'>
                    October 15, 2023
                </div>
                <h2 className='text-[32px] font-Poppins text-white font-semibold'>Global Cli mate Summit Addresses Urgent Climate Action</h2>
                <p className='text-[20px] font-normal font-Poppins leading-[150%] text-brand-gray'>World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</p>
                <div className='flex items-center justify-between gap-4 my-3'>
                    <div className="flex gap-4 items-center ">
                        <button className=' border-[1.5px] w-fit py-3 px-5 rounded-full flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear '>
                            <Image src={"/images/likeIcon.svg"} width={24} height={24} alt='like button' className='hover:' />
                            14 k
                        </button>
                        <button className=' border-[1.5px] w-fit py-3 px-5 rounded-full flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear '>  <Image src={"/images/shareIcon.svg"} width={17} height={17} alt='like button' />
                            204
                        </button>
                        <button className=' border-[1.5px] w-fit py-3 px-5 rounded-full flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear '>  <Image src={"/images/commentIcon.svg"} width={17} height={17} alt='like button' />
                            20
                        </button>
                    </div>
                    <div>
                        <button className=' border-[1.5px]  py-3 px-5 rounded-lg flex items-center justify-center gap-2 normalText border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear  hover:text-white w-fit  group'>
                            Technology
                            <Image src={"/images/downArrow.svg"} width={20} height={20} alt="arrow" className="rotate-[218deg] group-hover:rotate-[265deg] transition-all duration-200 ease-linear group-hover:brightness-200" />
                        </button>
                    </div>
                </div>


                <div className="flex flex-wrap gap-2">
                    {
                        blogCategory.map((item)=>(
                            <button className=' border-[1.5px] w-fit py-3 px-5  text-[14px] border-brand-darkGray text-brand-gray  hover:bg-brand-lightBlack transition-all duration-200 ease-linear '>  
                          {item.name}
                        </button>
                        ))
                    }
       
                </div>
            </div>
        </div>
    )
}

export default BlogsListingCard