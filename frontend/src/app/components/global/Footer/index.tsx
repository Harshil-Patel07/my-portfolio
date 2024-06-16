import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" m-10 container ">
      <div className="max-w-full rounded-2xl p-[1px] bg-gradient-to-tr from-[#7A87FB] via-brand-black to-[#FFD49C] overflow-hidden text-white/50 hover:text-white transition-colors duration-300 ease-linear ">
        <div className=" py-[3rem] bg-brand-black rounded-2xl  w-full px-10">
          <div className="flex items-start justify-between  border-b-[1px] border-b-brand-darkGray ">
            <div className="pb-10">
              <div className="flex items-center gap-3">
                <Image
                  alt="Logo Image"
                  src="/images/logo.svg"
                  width={44}
                  height={44}
                />
                <span className="text-white text-[24px] font-PlayWrite">
                  Harshil
                </span>
              </div>
              <p className="normalText text-white/70 font-thin font-Poppins">
                Build your project with us.
              </p>
            </div>

            <button className="normalText text-brand-black bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] py-4 px-7 rounded-full button-hover ">
              Get started
            </button>
          </div>
          <div className="pt-[3rem] flex justify-between ">
            <div>
              <p className="normalText">
                © 2024 Harshil Agola. All rights reserved.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="image"
                src={"/images/linkedin.svg"}
                width={20}
                height={20}
              />
              <Image
                alt="image"
                src={"/images/github.svg"}
                width={20}
                height={20}
                className="invert brightness-125"
              />
              <Image
                alt="image"
                src={"/images/ig-instagram-icon.svg"}
                width={20}
                height={20}
              />
              <Image
                alt="image"
                src={"/images/medium-round-icon.svg"}
                width={20}
                height={20}
              />
              <Image
                alt="image"
                src={"/images/whatsapp.svg"}
                width={20}
                height={20}
              />
            </div>

            <div className="flex gap-2">
              <Link href={"#"}>Term and conditions</Link>
              <Link href={"#"}>Term and conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
