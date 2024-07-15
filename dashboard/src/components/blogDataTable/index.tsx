"use client"
import React, { useState } from 'react';
import clsx from 'clsx';
import { CiMenuKebab } from 'react-icons/ci';
import { BlogType } from '@/libs/Types';
import { FcLike } from 'react-icons/fc';
import { IoIosLink } from 'react-icons/io';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import Image from 'next/image';

interface BlogDataTableProps {
    block: {
        blogs: BlogType[];
    };
}

const BlogDataTable: React.FC<BlogDataTableProps> = ({ block }) => {
    const headingFontStyle = "py-2 px-4 text-[0.8rem]";
    let actionButtonStyle = "border border-black/50 hover:border-black hover:shadow-xl rounded-md p-1 text-[1.5rem]"
    const { blogs } = block;
    const [expandedBlogId, setExpandedBlogId] = useState<string | null>(null);

    const toggleExpand = (blogId: string) => {
        if (expandedBlogId === blogId) {
            setExpandedBlogId(null);
        } else {
            setExpandedBlogId(blogId);
        }
    };


    const handleDeleteBlog = async (blogId:string) => {
        try {
            const response = await fetch(`http://localhost:4000/api/blog/delete/${blogId}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete blog');
            }
    
            const resData = await response.json();
            console.log(resData); 
        } catch (error:any) {
            console.error("Error deleting blog:", error.message);
        }
    };
    
    

    return (
        <table className="min-w-full bg-white border">
            <thead>
                <tr className="text-left bg-gray-100 sticky top-0 uppercase border-b">
                    <th className={headingFontStyle}>ID</th>
                    <th className={headingFontStyle}>Image</th>
                    <th className={headingFontStyle}>Title & Description</th>
                    <th className={headingFontStyle}>Date</th>
                    <th className={headingFontStyle}>Tags</th>
                    <th className={headingFontStyle}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {blogs?.length > 0 && blogs?.map((blog, index) => (
                    <React.Fragment key={blog._id}>
                        <tr className="border-b">
                            <td className={headingFontStyle}>{index + 1}</td>
                            <td className={headingFontStyle}>
                                <Image
                                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s"}
                                    width={200}
                                    height={150}
                                    alt={blog.title as string}
                                    className='max-w-[100px] rounded-lg shadow-lg border'
                                />
                            </td>
                            <td className={clsx(headingFontStyle, 'flex flex-col')}>
                                <div className='font-semibold'>{blog.title}</div>
                                <div className="text-sm text-black/80">{blog.description}</div>
                            </td>
                            <td className={headingFontStyle}>{new Date(blog.createdAt as string).toLocaleDateString()}</td>
                            <td className={headingFontStyle}>
                                {blog?.tags?.join(', ')}
                            </td>
                            <td className={clsx(
                                headingFontStyle,
                                ""
                            )}>
                                <div className='flex gap-1 relative'>
                                    <IoIosLink className={actionButtonStyle} />
                                    <MdDelete className={actionButtonStyle} onClick={()=>handleDeleteBlog(blog?._id)} />
                                    <MdModeEdit className={actionButtonStyle} />
                                    <CiMenuKebab onClick={() => toggleExpand(blog?._id)} className={actionButtonStyle} />
                                    {expandedBlogId === blog._id &&
                                        <div
                                            className="px-4 py-2 absolute top-[1.6rem] right-[15%] rounded-lg shadow-xl border selection:bg-transparent bg-white flex items-center  gap-2 "
                                        >
                                            {blog?.likes?.length} <FcLike />
                                        </div>}
                                </div>


                            </td>
                        </tr>

                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default BlogDataTable;
