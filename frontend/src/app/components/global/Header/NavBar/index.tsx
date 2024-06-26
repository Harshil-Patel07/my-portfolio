"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navItemData } from "../../../../../../database/navItemData";
const Navbar = () => {
  const router = usePathname();
  return (
    <div className="bg-brand-lightBlack flex items-center justify-center w-full h-fit py-2 gap-[20px]  rounded-full px-2  max-w-screen overflow-hidden ">
      {navItemData.map((item, index) => {
        const { id, label, link } = item || {};
        return (
          <Link
            key={index}
            href={link}
            className={clsx("normalText text-white flex items-center justify-center hover:bg-brand-darkGray p-3 rounded-full",
              router === link ? " bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] " : " "
            )}

          >
            {router === link ? (
              <item.icon className={clsx("text-[20px]",
                router === link ? "text-brand-black" : ""

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
