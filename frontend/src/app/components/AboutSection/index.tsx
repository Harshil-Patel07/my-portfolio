"use client";
import React, { useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";

const AboutSection = () => {
  let paragraph =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur harum, aliquam odio tempore nobis eos suscipit dolores a sed impedit provident amet commodi, perspiciatis aperiam mollitia excepturi facilis earum. Rem.  ";
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <div className="min-h-[150vh] flex container  items-center max-w-[70vw] text-white">
      <p
        className=" text-[40px]  w-full tracking-wider  flex flex-wrap leading-[1.7] relative"
        ref={element}
      >
        {words?.map((item, index) => {
          let start = index / words?.length;
          let end = start + 1 / words.length;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          return (
            <span className="mr-[12px] relative">
              <span className="absolute opacity-[0.3]">{item}</span>
              <motion.span
                className=""
                key={index}
                style={{ opacity: opacity }}
              >
                {item}
              </motion.span>
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default AboutSection;
