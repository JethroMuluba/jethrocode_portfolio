import React from 'react'
import ContactInfo from './ContactInfo';
import FollowMe from './FollowMe';
import ContactForm from './ContactForm';

function ContactMe() {
  return (
    <div id="contact-me" className=' w-full flex flex-col gap-8 items-center  text-center px-6 py-[50px]'>
          <div className=' flex flex-col gap-2  items-center md:w2/4   '>
            <h3 className=' font-semibold text-white text-[32px] md:text-[42px] md:text-center' >Contact Me</h3>
            <span className=' w-[96px] border-b-2 border-[#FEB633]'></span>
        </div>

        <div className=' flex flex-col gap-[46px] md:flex-row' >
          <div className=' flex flex-col gap-[46px]'>
            <ContactInfo/>
            <FollowMe/>
          </div>

          <ContactForm/>
          
        </div>

    </div>
  )
}

export default ContactMe;