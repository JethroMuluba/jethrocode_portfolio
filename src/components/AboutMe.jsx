import React from 'react';
import data from '../data/data.json'

function AboutMe() {
  return (
    <section className='bg-[#303131] text-center pt-[50px]'>
        <div className=' flex flex-col gap-2 items-center'>
            <h3 className=' font-semibold text-white text-[42px]' >About Me</h3>
            <span className=' w-[96px] border-b-2 border-[#FEB633]'></span>
        </div>
        <div>
            <div className=' p-6'>
                <p className='text-[#8D9092] mb-6'> {data.aboutMe[0].text1} </p>
                <p className='text-[#8D9092]'>{data.aboutMe[0].text2}</p>
            </div>

            <div className='flex flex-col gap-4 mx-[80px]'>
                <button className=' bg-[#FEB633] hover:bg-[#303131] text-sm font-semibold hover:border hover:border-[#FEB633] text-white hover:text-[#FEB633] py-[14px] px-[50px]   lg:mr-[450px]  rounded-md active:border-2 active:border-[#fff]'> View Work</button>
                <button className=' bg-none hover:bg-[#FEB633] text-sm font-semibold border border-[#FEB633] text-[#FEB633] hover:text-[#FFF] py-[14px] px-[50px]   lg:mr-[450px]  rounded-md active:border-2 active:border-[#fff]'>Download CV</button>
            </div>
        </div>


    </section>
  )
}

export default AboutMe;