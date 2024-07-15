import BlogFilters from '@/components/blogFilters';
import useFetchData from '@/hooks/useFetchData';
import Image from 'next/image';

import { BsFillSearchHeartFill } from 'react-icons/bs';

const CategoriesPage = async () => {
    const AllCategory = await useFetchData('http://localhost:4000/api/category/all')
    return (
        <div className="p-5 h-[90vh]">
            <div className='flex items-center justify-between'>
                <h1 className="text-2xl font-bold mb-4">Categories</h1>
                <BsFillSearchHeartFill />
                <BlogFilters />
            </div>
            <div className='grid grid-cols-5 gap-2'>
                {AllCategory?.category && AllCategory?.category.map((item:{
                    _id: string;
                    name: string;
                    image: string;  
                }) => {
                    const { _id, name, image } = item || {}
                    return <>
                        <div key={_id} className="bg-white border rounded-lg shadow-sm hover:shadow-md hover:border-black/20 p-4 flex items-center transition-all duration-200 ease-linear">
                            <div className="mr-4">
                                <Image alt='Category Image' src={image} width={50} height={50} className="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">{name}</h2>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    );
};



export default CategoriesPage;
