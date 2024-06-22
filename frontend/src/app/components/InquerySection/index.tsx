import Image from "next/image";
import React from "react";

const InquerySection = () => {
  return (
    <section
      aria-label="Inquiry Section"
      className="container  flex items-center justify-between gap-5"
    >
      <div className="flex flex-col gap-10 max-w-[40rem]">
        <h3 className="heading text-white font-[400] uppercase  items-center   relative">
     
          Have You Any Idea about Project?
          <Image alt="image" src={"/images/doubleStar.svg"} width={36} height={36} className="absolute right-[-5%] top-[-35%]" />
        </h3>
        <p className="text-white opacity-70 font-Poppins text-[1.3rem] font-thin ">
        {"  Connect with others online and establish your brand. Let's turn your vision into reality."}
        </p>

        <button className="normalText text-brand-black bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] py-4 px-10 rounded-full button-hover w-fit ">
     {" Let's Get Started ✦"}
        </button>
      </div>
      <Image
        alt="A team brainstorming ideas for a new project."
        src="/images/inquerySectionImage.svg"
        width={392}
        height={392}
        loading="lazy"
        className="object-contain"
      />
    </section>
  );
};

export default InquerySection;
