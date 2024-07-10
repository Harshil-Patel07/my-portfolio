"use client"
import { BlogfiltersData } from '@/dataBase'
import clsx from 'clsx'
import React, { useState, useEffect, useRef } from 'react'
import { CiFilter } from 'react-icons/ci'

const BlogFilters: React.FC = () => {
    const defaultValue = BlogfiltersData?.filter((i) => i.default)[0]
    const [selectedFilter, setSelectedFilter] = useState(defaultValue?.label || '')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleFilterClick = (label: string) => {
        setSelectedFilter(label)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false)
        }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsDropdownOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscapeKey)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [])

    return (
        <div className='relative selection:bg-transparent' ref={dropdownRef}>
            <CiFilter
                onClick={toggleDropdown}
                className='cursor-pointer gap-2 text-[2rem] rounded-full px-2 py-1 bg-black text-white'
            />
            {isDropdownOpen && (
                <ul className='absolute mt-2 right-0 w-[8rem] shadow-lg rounded-md overflow-hidden bg-black/90 text-white z-[99] ' >
                    {
                        BlogfiltersData.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleFilterClick(item?.label)}
                                className={clsx(
                                    "p-2 text-[1rem] flex items-center cursor-pointer",
                                    { "bg": selectedFilter === item?.label }
                                )}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedFilter === item?.label}
                                    readOnly
                                    className="mr-2"
                                />
                                {item?.label}
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default BlogFilters
