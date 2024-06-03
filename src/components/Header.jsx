import React from 'react'
import MenuBurger from './MenuHamburger'

function Header() {
  return (
  <header className='flex justify-between items-center w-full bg-[#2B2C2C] py-3 px-4 sm:px-[30px] md:px-[50px] lg:px-[150px]'>
        <div>
            <span className='text-[#FEB633] font-bold text-[23px] '>Jethro Code</span>
        </div>

        <MenuBurger/>

        <nav className=' hidden md:block '>
            <ul className='flex md:gap-4  lg:gap-8 text-white font-normal text-sm' >
                <li className=' hover:text-[#FEB633] '>Home</li>
                <li className=' hover:text-[#FEB633] '>About Me</li>
                <li className=' hover:text-[#FEB633] '>Realisations</li>
                <li className=' hover:text-[#FEB633] '>Experiences</li>
                <li className=' hover:text-[#FEB633] '>Contact Me</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header