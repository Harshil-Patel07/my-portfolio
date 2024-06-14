import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { LuBadgeInfo } from "react-icons/lu";
import { SiOpenproject } from "react-icons/si";
import { TbBrandBlogger } from "react-icons/tb";

const Navbar = () => {
  const router = "/";

  const navItemData = [
    { id: 1, label: "home", icon: IoHomeOutline, link: "/" },
    { id: 2, label: "about", icon: LuBadgeInfo, link: "/about" },
    { id: 3, label: "Blogs", icon: TbBrandBlogger, link: "/blogs" },
    { id: 4, label: "Resource", icon: GoProjectRoadmap, link: "/resources" },
    { id: 5, label: "Projects", icon: SiOpenproject, link: "/projects" },
    { id: 6, label: "Contact me", icon: BiMessageSquareDetail, link: "/contact" },
  ];

  return (
    <div className="bg-brand-lightBlack flex items-center justify-center w-full h-fit py-2 gap-[20px]  rounded-full px-2 ">
      {navItemData.map((item, index) => {
        const { id, label, link } = item || {};
        return (
          <Link
            href={link}
            className={clsx("normalText text-white flex items-center justify-center hover:bg-brand-darkGray p-3 rounded-full",
                router === link ? " bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C]" :" "
            )}
          >
            {router === link ? (
              <item.icon className={clsx( "text-[20px]",
                router === link ? "text-brand-black" :""

              )} />
            ) : (
              <span className="normalText capitalize block w-full whitespace-nowrap ">{label}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
