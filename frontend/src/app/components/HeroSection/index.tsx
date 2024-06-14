import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const techs = [
    { id: "1", label: "Framer" },
    { id: "2", label: "Webflow" },
    { id: "3", label: "Figma" },
    { id: "4", label: "Notion" },
    { id: "5", label: "React js" },
    { id: "6", label: "Html" },
    { id: "7", label: "Css" },
  ];
  return (
    <div>
      <div className="container bg-hero-image text-white bg-cover bg-no-repeat min-h-[70vh] flex items-center justify-center relative">
        <div className="text-center flex flex-col gap-3 items-center justify-center bg-brand-black max-w-[552px]  ">
           
          <h1 className="heading"> I design and build clean websites</h1>
          <p className="normalText">
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </p>
          <button className="normalText text-black bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] py-4 px-7 rounded-full button-hover">
            Hire me
          </button>
        </div>
        <Image src="/images/starVector.svg" alt="image" width={31} height={31} className="  absolute top-[10vh] right-[10vw] animate-pulse" />
        <Image src="/images/starVector.svg" alt="image" width={31} height={31}  className="absolute bottom-[10vh] left-[10vw] animate-pulse" />
      </div>
      <div className="flex text-white w-full min-w-[300px] max-w-screen overflow-hidden border-t-2 border-b border-[#FFFFFF]/25 py-10">
        <div className="flex w-full items-center justify-center">
          {techs.concat(techs).map((item, index) => (
            <div key={index} className="flex w-full whitespace-nowrap  min-w-[250px]  items-center justify-evenly infinite-scroll  ">
              <div className="mx-4">{item.label}</div>
              <Image
                src="/images/star.svg"
                alt="image"
                width={24}
                height={24}
              />
            </div>
          ))}
          {techs.concat(techs).map((item, index) => (
            <div key={index} className="flex w-full whitespace-nowrap min-w-[250px]  items-center justify-evenly  infinite-scroll">
              <div className="mx-4">{item.label}</div>
              <Image
                src="/images/star.svg"
                alt="image"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
