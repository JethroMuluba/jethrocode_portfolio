import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function FollowMe() {
  return (
    <div className=' flex flex-col gap-[15px] items-center md:items-start'>
        <h3 className="text-[22px] font-semibold text-white md:text-start">Follow Me</h3>
        <div className=' flex gap-[14px]' >
            <a href="https://web.facebook.com/jethro.muluba/" className=' text-[#8D9092] hover:text-[#FEB633]'><FaFacebookF size={20} /></a>
            <a href="https://x.com/JethroMuluba" className=' text-[#8D9092] hover:text-[#FEB633]' ><FaXTwitter size={20} /></a>
            <a href="https://www.linkedin.com/in/jethro-muluba-66a927315" className=' text-[#8D9092] hover:text-[#FEB633]'><FaLinkedinIn size={20} /></a>
            <a href="" className=' text-[#8D9092] hover:text-[#FEB633]'><FaTiktok size={20} /></a>
            <a href="" className=' text-[#8D9092] hover:text-[#FEB633]'><FaPinterestP size={20} /></a>
        </div>
    </div>
  )
}

export default FollowMe;