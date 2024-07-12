import React, { useEffect, useState } from 'react'
import MenuBurger from './MenuHamburger'
import { AnimatePresence, motion } from 'framer-motion';

function Header() {

    const [ activeSection, setActiveSection ] = useState();

        useEffect(() => {
            const handleSroll = () => {
                const sections = document.querySelectorAll('section');
                const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
                let currentSection = '';

                sections.forEach( section => {
                    const top = section.offsetTop - 100;
                    const bottom = top + section.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        currentSection = section.id;
                    };
                });

                setActiveSection(currentSection);
            };
            window.addEventListener('scroll', handleSroll);
            handleSroll();

                return () => {
                    window.removeEventListener('scroll', handleSroll);
                };
        }, []);

        const getLinkClass = ( section ) => {
            return activeSection === section ? 'text-[#FEB633]' : 'text-white';
        }
  return (
    <AnimatePresence>
    <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className=' fixed flex justify-between items-center w-full bg-[#2B2C2C] py-3 px-4 sm:px-[30px] md:px-[50px] lg:px-[150px] z-50'>
        <div>
            <span className='text-[#FEB633] font-bold text-[23px] pl-2 '> <a href='#home'> Jethro Code. </a></span>
        </div>

        <MenuBurger/>

        <nav className=' hidden md:block '>
            <ul className='flex md:gap-4  lg:gap-8 text-white font-normal text-sm' >
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('home')}`}> <a href='#home'> Home </a></li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('about-me')}`}> <a href='#about-me'> About Me </a></li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('services')}`}> <a href='#services'> Services </a></li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('experiences')}`}> <a href='#experiences'> Experiences </a></li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('contact-me')}`}> <a href='#contact-me'> Contact Me </a></li>
            </ul>
        </nav>
    </motion.header>
    </AnimatePresence>
    )
}

export default Header