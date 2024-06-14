import React from "react";
import Navbar from "./NavBar";
import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className=" container flex items-center justify-center">
      <div className="flex items-center  gap-[12px] mx-auto py-[70px] w-full">
        <Image
          alt="Logo Image"
          src="/images/logo.svg"
          width={44}
          height={44}
        ></Image>
        <span className="text-white text-[24px] font-PlayWrite   ">Harshil</span>
      </div>
      <Navbar />
      <div className="w-full flex items-center justify-end gap-2">
        <button className="normalText text-brand-black bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] py-4 px-7 rounded-full button-hover">
          Hire me
        </button>
        <button className=" bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] p-3  rounded-full ">
          <IoSettingsSharp className="text-[1.6rem] smooth-rotate " />
        </button>
      </div>
    </div>
  );
};

export default Header;
