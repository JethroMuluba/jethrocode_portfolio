import React from 'react'
import data from '../data/data.json'
import { AnimatePresence, motion } from 'framer-motion';

function Hero() {
  return (
    <AnimatePresence>
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    id="home" className='bg-[#2B2C2C] md:flex md:flex-col lg:flex lg:flex-row lg:justify-between  md:items-center md:px-[50px] lg:px-[150px]'>
        <div className=' flex flex-col md:flex md:flex-col md:items-center lg:items-start md:gap-4 text-center md:text-center lg:text-left  text-white'>
            <h1 className=' font-semibold text-[45px] md:text-[65px] pt-[30px] px-4 md:px-0 '>I'm Jethro Muluba</h1>
            <h2 className=' font-light mb-5'>Freelance Web & Mobile Developer, <br /> Ui/Ux Designer</h2>
            <motion.button 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
              }}
            className=' bg-[#FEB633] md:w-[213px] hover:bg-[#303131] text-sm font-semibold hover:border hover:border-[#FEB633] text-white hover:text-[#FEB633] py-[14px] px-[50px] mx-[80px] md:mx-0  rounded-md active:border-2 active:border-[#fff]'>Contact Me</motion.button>
        </div>
        <motion.img 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
        }}
        src={data.profile} alt="Profile of Jethro Muluba" className=' md:w-[500px]'/>
    </motion.section>
    </AnimatePresence>
  )
}

export default Hero;