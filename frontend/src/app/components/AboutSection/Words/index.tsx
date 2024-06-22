import { useTransform, motion } from 'framer-motion';
import React from 'react';

interface WordsProps {
    block: string[];
    item: string;
    index: number;
    scrollYProgress: any;
}

const Words: React.FC<WordsProps> = ({ block, item, index, scrollYProgress }) => {
    let start = index / block.length;
    let end = start + 1 / block.length;
    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

    return (
        <span className="mr-[12px] relative">
            <span className="absolute opacity-[0.3]">{item}</span>
            <motion.span
                className=""
                style={{ opacity: opacity }}
            >
                {item}
            </motion.span>
        </span>
    );
};

export default Words;
