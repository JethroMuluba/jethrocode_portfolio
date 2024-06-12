import React, { useEffect, useState } from 'react'
import MenuBurger from './MenuHamburger'

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
  <header className=' fixed flex justify-between items-center w-full bg-[#2B2C2C] py-3 px-4 sm:px-[30px] md:px-[50px] lg:px-[150px] z-50'>
        <div>
            <span className='text-[#FEB633] font-bold text-[23px] pl-2 '>Jethro Code.</span>
        </div>

        <MenuBurger/>

        <nav className=' hidden md:block '>
            <ul className='flex md:gap-4  lg:gap-8 text-white font-normal text-sm' >
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('home')}`}>Home</li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('about-me')}`}>About Me</li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('services')}`}>Services</li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('experiences')}`}>Experiences</li>
                <li className={`hover:text-[#FEB633] cursor-pointer ${getLinkClass('contact-me')}`}>Contact Me</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header