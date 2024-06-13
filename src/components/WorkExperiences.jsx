import React from 'react';
import data from '../data/data.json';
function WorkExperiences() {

    const underTitle = data.workExperiences[0].underTitle;
  return (
    <section id="experiences" className=' w-full flex flex-col gap-8 items-center text-center py-[50px]'>
        <div className=' flex flex-col gap-2 items-center md:w2/4   '>
            <h3 className=' font-semibold text-white text-[32px] md:text-[42px] md:text-center' >Work Experiences</h3>
            <span className=' w-[96px] border-b-2 border-[#FEB633]'></span>
        </div>

        <p className='text-[#8D9092]  px-6 md:px-[300px]  md:p-0 '> {underTitle} </p>




    </section>
  )
}

export default WorkExperiences;