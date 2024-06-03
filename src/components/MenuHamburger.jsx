import Hamburger from 'hamburger-react'
import { useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';


function MenuBurger() {
const [isOpen, setOpen] = useState(false);
const ref = useRef(null);

const navigate = useNavigate();
const handleClick = (path) => {
    navigate(path);
}

return(
<div  className=' block md:hidden top-2'>
    <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20} color="#FEB633"  />
    <AnimatePresence>
    {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed left-0 shadow-4xl right-0 top-[4rem]  pt-0 border-b border-b-white/20"
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
                >
                <Link to={'/dashboard'} className='text-white'>
                    <li className='flex items-center  gap-[20px] py-[10px] px-[27px]  hover:bg-[#2B2C2C] hover:text-[#FEB633] '>
                       
                        <p className='text-base font-medium '>
                            Home
                        </p>
                    </li>
                </Link>
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
                >
                <Link to={'/depenses'} className='text-white'>
                    <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '>
                        
                        <p className='text-base font-medium '>
                            About Me
                        </p>
                    </li>
                </Link>
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
                >
            <Link to={'/Statistiques'} className='text-white'>
                <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '>
                    
                    <p className='text-base font-medium '>
                        Realisations
                    </p>
                </li>
            </Link>
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
                >
            <Link to={'/Notifications'} className='text-white'>
                <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '>
                    
                    <p className='text-base font-medium '>
                        Experiences
                    </p>
                </li>
            </Link>
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
                >
            <Link to={'/Paramètres'} className='text-white'>
                <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-[#2B2C2C] hover:text-[#FEB633] '>
                    
                    <p className='text-base font-medium '>
                        Contact Me
                    </p>
                </li>
            </Link>
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