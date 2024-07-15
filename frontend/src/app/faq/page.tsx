"use client"
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import animationData from "../../../public/lotties/gradient.json";

const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const animationContainerRef = useRef<HTMLDivElement>(null);

    const faqData = [
        {
            question: "What services do you offer?",
            answer: "I offer web development services including front-end development with React, back-end development with Node.js, and full-stack development. I also provide website maintenance and performance optimization services."
        },
        {
            question: "What is your development process?",
            answer: "My development process involves initial consultation to understand your requirements, followed by planning, design, development, testing, and deployment. I ensure regular updates and feedback throughout the process to deliver the best results."
        },
        {
            question: "How long does it take to build a website?",
            answer: "The timeline depends on the complexity and size of the project. A simple website can take 2-4 weeks, while a more complex web application can take several months. We can discuss your project specifics to provide a more accurate timeline."
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer: "Yes, I provide ongoing maintenance and support services to ensure your website remains up-to-date, secure, and performing well. This can include updates, backups, performance optimizations, and troubleshooting."
        },
        {
            question: "Can you help with website redesign?",
            answer: "Absolutely! I can help redesign your existing website to improve its look, feel, and functionality, ensuring it meets current web standards and provides an excellent user experience."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "I specialize in front-end technologies like React, Next.js, and Tailwind CSS, and back-end technologies like Node.js, Express, and MongoDB. I also have experience with GraphQL, Sanity, and other modern web development tools."
        },
        {
            question: "How do you handle project communication?",
            answer: "I use various communication tools such as email, Slack, and video calls to ensure clear and regular communication throughout the project. I also provide progress updates and reports to keep you informed."
        },
        {
            question: "What are your rates for web development services?",
            answer: "My rates depend on the project scope, complexity, and timeline. We can discuss your project in detail to provide a customized quote. I aim to offer competitive rates while delivering high-quality work."
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        if (animationContainerRef.current) {
            lottie.loadAnimation({
                container: animationContainerRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });
        }
    }, []);

    return (
        <div className="relative">
            <div ref={animationContainerRef}   className='absolute inset-0 z-0 [&>*:nth-child(2)]:hidden'></div>
            <div className="relative z-10 max-w-4xl mx-auto p-4 text-white">
                <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left transform transition-transform duration-500 ease-linear py-4 flex justify-between items-center"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 text-gray-100">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqPage;
