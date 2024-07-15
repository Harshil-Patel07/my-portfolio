"use client"
import {motion, useScroll, useSpring } from 'framer-motion';
import React from 'react'

const TopScrollBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-1 z-[99] bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] origin-left" style={{ scaleX }} />
  )
}

export default TopScrollBar
