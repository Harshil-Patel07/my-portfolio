const WhatIDoSection = () => {
  const data = [
    {
      id: 1,
      title: "Custom Website Development",
      description:
        "Creating unique and tailored websites that meet your specific business needs and objectives. I focus on delivering high-quality, user-friendly websites that effectively represent your brand and engage your audience.",
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
    <div>
      <section className="py-12 min-h-[70vh]">
        <div className="">
          <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>
          <div className="flex items-start max-w-screen overflow-x-hidden">
            <div className="flex w-full gap-10 infinite-scroll  ">
              {data.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg p-6 min-w-[500px]"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="flex w-full gap-10 infinite-scroll ">
              {data.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg p-6 min-w-[500px]"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIDoSection;
