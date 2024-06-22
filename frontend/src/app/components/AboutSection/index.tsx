"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Words from "./Words";

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
    <div className="min-h-[150vh] flex container items-center max-w-[70vw] text-white">
      <p
        className="text-[40px] w-full tracking-wider flex flex-wrap leading-[1.7] relative"
        ref={element}
      >
        {words?.map((item, index) => (
          <Words key={index} block={words} item={item} index={index} scrollYProgress={scrollYProgress} />
        ))}
      </p>
    </div>
  );
};

export default AboutSection;
