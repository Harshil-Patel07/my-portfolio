"use client";
import BlogDataTable from '@/components/blogDataTable';
import BlogFilters from '@/components/blogFilters';
import React, { useEffect, useState } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';

const BlogsPage = () => {
    const [data, setData] = useState({
        success: false,
        totalBlogs: 0,
        blogs: []
    });

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/blog/all");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlogData();
    }, []);

    return (
        <div className="p-5 h-[90vh]">
            <div className='flex items-center justify-between'>
                <h1 className="text-2xl font-bold mb-4">Blogs</h1>
                <BsFillSearchHeartFill />
                <BlogFilters />
            </div>
            <BlogDataTable block={data} />
        </div>
    );
};

export default BlogsPage;
