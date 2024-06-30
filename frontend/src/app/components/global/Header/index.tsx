"use client"
import React, { useState } from "react";
import Navbar from "./NavBar";
import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import ThemeSelectOptions from "../../ThemeSelectOptions";
import clsx from "clsx";
import { gradientColors } from "../../../../../database/navItemData";

const Header = () => {
  const [selectedtheme, setSelectedTheme] = useState(0);
  const [showSettings, setShowSettings] = useState(false)
  return (
    <div className="container flex items-center justify-centr ">
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

        <button
          onClick={() => setShowSettings((prev) => !prev)}
          className={clsx(" p-3  rounded-full   ",
            gradientColors[selectedtheme]?.color
          )}>
          <IoSettingsSharp className="text-[1.6rem] smooth-rotate " />

        </button>
      <ThemeSelectOptions
          selectedtheme={selectedtheme}
          setSelectedTheme={setSelectedTheme}
          setShowSettings={setShowSettings}
          showSettings={showSettings}
        />

        <button className={clsx(" p-3  rounded-full ", gradientColors[selectedtheme]?.color)}>
          <IoMdNotificationsOutline className="text-[1.6rem] animate-shake" />
        </button>
      </div>
    </div>
  );
};

export default Header;
