'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Spotlight } from '../ui/spotlight'
import { cn } from '@/lib/utils'
import MagicButton from '../ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <div className='relative flex flex-col items-center pt-[139px] md:pt-[239px]'>
        <div
            className={cn(
            "pointer-events-none absolute inset-0 [background-size:100px_100px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            )}
        />
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
        />
        <div className="relative z-10 flex items-center flex-col bg-container">      
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-[#E4ECFF] leading-[120%] tracking-[5px] uppercase text-center mb-6 text-sm md:text-base'>
                Welcome to my portfolio!
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" font-bold text-white md:tracking-[-0.03em] text-center align-middle max-w-[938px] text-4xl md:text-7xl">
                Transforming Concepts into Seamless User Experiences
            </motion.p>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-[#E4ECFF] font-light text-center mt-[30px] sm:text-lg md:text-2xl mb-5'>Hi! I’m Nguyen Khanh Huan, a passionate Full-Stack Developer</motion.p>
            <a href="#about">
                <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>
        </div>
    </div>
  )
}

export default HeroSection