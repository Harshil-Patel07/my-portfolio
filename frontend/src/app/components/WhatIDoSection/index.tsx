import Image from "next/image";
import React from "react";

const WhatIDoSection = () => {
  return (
    <div>
      <section className="py-12 min-h-screen">
        <div className="">
          <h2 className="text-3xl font-bold mb-8 text-center  flex items-center justify-center w-full  pb-[5rem] bg-gradient-to-l from-[#7A87FB]  to-[#FFD49C] text-transparent bg-clip-text gap-5 uppercase tracking-widest">
            <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
            What I Do ?
            <Image src="/images/star.svg" alt="image" width={24} height={24} className="smooth-rotate" />
            </h2>
          <div className="flex items-start gap-5 max-w-screen overflow-x-hidden group">
            <Services />
            <Services />
          </div>
        </div>
      </section>
    </div>
  );
};

export const Services = () => {
  const data = [
    {
      id: 1,
      title: "Custom Website Development",
      description:
        "Creating unique and tailored websites that meet your specific business needs and objectives. I focus on delivering high-quality, user-friendly websites that effectively represent your brand and engage your audience.",
        content:{
          
        }
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description:
        "Building robust online stores with seamless user experiences and secure payment integrations. I ensure your e-commerce website is optimized for conversions, providing your customers with a smooth and enjoyable shopping experience.",
    },
    {
      id: 3,
      title: "Responsive Design",
      description:
        "Ensuring your website looks great on all devices, from desktops to smartphones. I use the latest responsive design techniques to create websites that are visually appealing and function flawlessly on any screen size.",
    },
    {
      id: 4,
      title: "Web Application Development",
      description:
        "Developing powerful web applications with rich features and functionalities. Whether you need a simple tool or a complex web application, I can create a solution that meets your requirements and exceeds your expectations.",
    },
    {
      id: 5,
      title: "CMS Development",
      description:
        "Implementing Content Management Systems (CMS) like WordPress, Joomla, and Drupal for easy content management. I provide you with the tools and training needed to manage your website content efficiently and effectively.",
    },
    {
      id: 6,
      title: "SEO Optimization",
      description:
        "Optimizing your website for search engines to improve your online visibility and attract more organic traffic. I use proven SEO strategies to ensure your website ranks higher in search results, driving more potential customers to your business.",
    },
    {
      id: 7,
      title: "Maintenance and Support",
      description:
        "Providing ongoing support and maintenance to keep your website up-to-date and secure. I offer comprehensive maintenance services to ensure your website remains functional, secure, and relevant in an ever-changing digital landscape.",
    },
  ];

  return (
    <ul className="flex items-start justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:pause-animation gap-5 ">
      {data?.map((service,index) => (
        <div className="flex items-center justify-center  min-w-[29vw]" key={index}>
          <div className="max-w-md rounded-2xl p-[1px] bg-gradient-to-tr from-[#7A87FB] via-brand-black to-[#FFD49C] overflow-hidden text-white/50 hover:text-white transition-colors duration-300 ease-linear ">
            <ul className=" py-[3rem] bg-brand-black rounded-2xl ">
              <li key={service.id} className=" ">
                <div className="flex items-center gap-3 pb-5">
                  <Image
                    src="/images/starVector.svg"
                    alt="image"
                    width={31}
                    height={31}
                    className="animate-pulse"
                  />
                  <h2 className="text-[1.4rem] font-Poppins bg-gradient-to-t from-[#7A87FB]  to-[#FFD49C] text-transparent bg-clip-text ">{service.title}</h2>
                </div>
                <p className=" font-Poppins normalText text-brand-gray">{service.description}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default WhatIDoSection;
