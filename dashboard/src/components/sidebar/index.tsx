"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { TbBrandBlogger } from 'react-icons/tb'

const Sidebar = () => {
  const pathname = usePathname()
  const linkStyle = 'flex items-center gap-2 py-2 rounded-full px-4'
  const activeLinkStyle = 'bg-gray-200'

  return (
    <div className=''>

    <Link href="/">
        <span className='font-bold text-xl'>HARSH!L</span>
      </Link> 
      <nav>
        <ul className='mt-5'>
          <li>
            <Link href="/" className={`${linkStyle} ${pathname === '/' ? activeLinkStyle : ''}`}>
              <IoHomeOutline /> Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={`${linkStyle} ${pathname === '/blogs' ? activeLinkStyle : ''}`}>
              <TbBrandBlogger /> Blog
            </Link>
           
          </li>
          <li>
          <Link href="/categories" className={`${linkStyle} ${pathname === '/categories' ? activeLinkStyle : ''}`}>
              <TbBrandBlogger /> Categories
            </Link>
          </li>
        </ul>
      </nav>
    </div>


   
  )
}

export default Sidebar
