import React from 'react';
import data from '../data/data.json'

function AboutMe() {
  return (
    <section className=' w-full bg-[#303131] bg-[center_left]  bg-about-motif bg-no-repeat md:bg-[center_left_9rem] md:flex md:flex-row text-center md:text-left py-[50px] md:justify-center md:gap-24 md:items-center '>
        <div className=' flex flex-col gap-2 items-center md:w2/4   '>
            <h3 className=' font-semibold text-white text-[32px] md:text-[42px] md:text-center' >About Me</h3>
            <span className=' w-[96px] border-b-2 border-[#FEB633]'></span>
        </div>
        <div className=' md:w-2/5 md:flex md:flex-col md:gap-6'>
            <div className=' p-6 md:p-0'>
                <p className='text-[#8D9092] mb-6'> {data.aboutMe[0].text1} </p>
                <p className='text-[#8D9092]'>{data.aboutMe[0].text2}</p>
            </div>

            <div className='flex flex-col gap-4 mx-[80px] md:mx-0 md:flex md:flex-row md:gap-10' >
                <button className=' bg-[#FEB633] hover:bg-[#303131] text-sm font-semibold hover:border hover:border-[#FEB633] text-white hover:text-[#FEB633] py-[14px] px-[50px] md:ml-0   rounded-md active:border-2 active:border-[#fff]'> View Work</button>
                <a href='/public/Jethro_Muluba Cv FullStack Developer.pdf' download className=' bg-none hover:bg-[#FEB633] text-sm font-semibold border border-[#FEB633] text-[#FEB633] hover:text-[#FFF] py-[12px] px-[50px] md:m-0   rounded-md active:border-2 active:border-[#fff]'>Download CV</a>
            </div>
        </div>


    </section>
  )
}

export default AboutMe;