import Hamburger from 'hamburger-react'
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';


function MenuBurger() {
const [isOpen, setOpen] = useState(false);
const hamburgerRef = useRef(null);

useEffect (() => {
    const handleClickOutside = (event) => {
        if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

const navigate = useNavigate();
const handleClick = (path) => {
    navigate(path);
}

return(
<div ref={hamburgerRef}  className=' block md:hidden top-2'>
    <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20} color="#FEB633"  />
    <AnimatePresence>
    {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed left-0  right-0 top-[4.4rem] "
      >
    <nav className="flex flex-col gap-2 sticky  text-xl bg-[#303131] ">

        <ul className='flex flex-col gap-[px]'>
            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex items-center  gap-[20px] text-white text-sm font-medium py-[20px] px-[27px]  hover:bg-[#2B2C2C] hover:text-[#FEB633]  '
                >
                    <a href='#home'> Home </a>
            </motion.li>

            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex items-center  gap-[20px] text-sm text-white font-medium  py-[20px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '
                >
                    <a href='#about-me'> About Me </a>
        </motion.li>

        <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex items-center  gap-[20px] text-sm text-white font-medium py-[20px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '
                >
                <a href='#services'> Services </a>
        </motion.li>

        <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex items-center  gap-[20px] text-white text-sm font-medium py-[20px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '
                >
                <a href='#experiences'> Experiences </a>
        </motion.li>


        <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex items-center  gap-[20px] text-white text-sm font-medium py-[20px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '
                >
                <a href='#contact-me'> Contact Me </a>
        </motion.li>

        </ul>

    </nav>
    </motion.div>
    )}
    </AnimatePresence>

</div>

)
}
export default MenuBurger;  