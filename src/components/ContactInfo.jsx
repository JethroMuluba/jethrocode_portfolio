import React from 'react';
import { IoLocation } from "react-icons/io5";
import data from "../data/data.json";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoGlobe } from "react-icons/io5";

function ContactInfo() {
  return (
    <div className=' flex flex-col gap-[36px] '>
        <h3 className="text-[22px] font-semibold text-white md:text-start">Contact Info</h3>

        <div className=' flex flex-col gap-[36px]'>
            <div className='flex gap-3 items-center'>
                <IoLocation size={20} color='#8D9092' />
                <p className=' text-base text-[#8D9092] '> {data.contact[0].address} </p>
            </div>

            <div className='flex gap-3 items-center'>
                <MdEmail size={20} color='#8D9092' />
                <p className=' text-base text-[#8D9092] '> {data.contact[0].email} </p>
            </div>

            <div className='flex gap-3 items-center'>
                <FaPhone size={20} color='#8D9092' />
                <div>
                    <p className=' text-base text-[#8D9092] '> {data.contact[0].phone1} </p>
                    {/* <p className=' text-base text-[#8D9092] '> {data.contact[0].phone2} </p> */}
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <IoGlobe size={20} color='#8D9092' />
                <p className=' text-base text-[#8D9092] '> {data.contact[0].website} </p>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo;