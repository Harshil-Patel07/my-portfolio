
import BlogDataTable from '@/components/blogDataTable';
import BlogFilters from '@/components/blogFilters';
import { useEffect } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';

const BlogsPage = async () => {
    const dynamicData = await fetch(`http://localhost:4000/api/blog/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });


    return (
        <div className="p-5 h-[90vh]">
            <div className='flex items-center justify-between'>
                <h1 className="text-2xl font-bold mb-4">Blogs</h1>
                <BsFillSearchHeartFill />
                <BlogFilters />
            </div>
            {/* <BlogDataTable blogs={data} /> */}
        </div>
    );
};

export default BlogsPage;
