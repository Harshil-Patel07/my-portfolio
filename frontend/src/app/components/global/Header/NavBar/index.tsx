"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { navItemData } from "../../../../../../database/navItemData";

const Navbar = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const router = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollYPosition = window.scrollY;
      if (currentScrollYPosition < scrollYPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      setScrollYPosition(currentScrollYPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYPosition]);

  return (
    <div className={clsx(
      "bg-brand-lightBlack flex items-center justify-center h-fit py-2 gap-[20px] rounded-full px-2   ",
      scrollYPosition > 200 &&   isFixed ? "fixed top-3 w-fit z-[99999] left-1/2 -translate-x-1/2" : "relative  w-full "
    )}>
      {navItemData.map((item, index) => {
        const { id, label, link } = item || {};
        return (
          <Link
            key={index}
            href={link}
            className={clsx("normalText text-white flex items-center justify-center hover:bg-brand-darkGray p-3 rounded-full",
              router === link ? " bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C]" : ""
            )}
          >
            {router === link ? (
              <item.icon className={clsx("text-[20px]", router === link ? "text-brand-black" : "")} />
            ) : (
              <span className="normalText capitalize block w-full whitespace-nowrap">{label}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
