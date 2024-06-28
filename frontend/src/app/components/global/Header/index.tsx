import React, { useState } from "react";
import Navbar from "./NavBar";
import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" container flex items-center justify-centr ">
      <Link href={"/"} className="flex items-center  gap-[12px] mx-auto py-[70px] w-full">
        <Image
          alt="Logo Image"
          src="/images/logo.svg"
          width={44}
          height={44}
        ></Image>
        <span className="text-white text-[24px] font-PlayWrite">Harshil</span>
      </Link>
      <Navbar />
      <div className="w-full flex items-center justify-end gap-2">
      

          <button className=" bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] p-3  rounded-full ">
            <IoSettingsSharp className="text-[1.6rem] smooth-rotate " />
          </button>
          <button className=" bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] p-3  rounded-full ">
            <IoMdNotificationsOutline className="text-[1.6rem] animate-shake" />
          </button>

      </div>
    </div>
  );
};

export default Header;
