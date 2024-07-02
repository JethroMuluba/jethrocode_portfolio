import React from 'react';
import data from '../data/data.json';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className=' w-full h-full bg-[#303131] items-center text-center ' >
        <div className=' w-full h-full  flex flex-col py-[50px] '>
            <p className=' font-bold text-[40px] md:text-[90px] text-[#FEB633] px-4 '> {data.footer[0].title} </p>

            <div className=' flex flex-col gap-8 items-center'>
                <p  className=' text-[#8D9092]  px-6 md:px-[300px]  md:p-0 '>{data.footer[0].underTitle}</p>

                <div className=' flex gap-[14px]' >
                    <a href="https://web.facebook.com/jethro.muluba/" className='bg-[#2B2C2C] rounded-full p-2 text-[#8D9092] hover:text-[#FEB633]'><FaFacebookF size={20} /></a>
                    <a href="https://x.com/JethroMuluba" className='bg-[#2B2C2C] rounded-full p-2 text-[#8D9092] hover:text-[#FEB633]' ><FaXTwitter size={20} /></a>
                    <a href="https://www.linkedin.com/in/jethro-muluba-66a927315" className='bg-[#2B2C2C] rounded-full p-2 text-[#8D9092] hover:text-[#FEB633]'><FaLinkedinIn size={20} /></a>
                    <a href="" className='bg-[#2B2C2C] rounded-full p-2 text-[#8D9092] hover:text-[#FEB633]'><FaTiktok size={20} /></a>
                    <a href="" className='bg-[#2B2C2C] rounded-full p-2 text-[#8D9092] hover:text-[#FEB633]'><FaPinterestP size={20} /></a>
                    <a href="" className='bg-[#2B2C2C] rounded-full p-2 text-[#8D9092] hover:text-[#FEB633]'><FaDribbble size={20} /></a>
                    <a href="" className='bg-[#2B2C2C] rounded-full p-2 text-[#8D9092] hover:text-[#FEB633]'><FaInstagram size={20} /></a>
                </div>

            </div>

        </div>

        <div className=' w-full bg-[#2B2C2C] py-[41px] px-4'>
            <p className=' text-white text-sm font-light'> {data.footer[0].copyright} </p>
        </div>
    </section>

  )
}

export default Footer;