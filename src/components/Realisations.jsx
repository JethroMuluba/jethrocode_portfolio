import React from 'react';
import data from '../data/data.json';

function Realisations() {

    const underTitle = data.realisations[0].underTitle;
  return (
   <section className=' w-full flex flex-col items-center text-center py-[50px]'>
        <div className=' flex flex-col gap-2 items-center md:w2/4   '>
            <h3 className=' font-semibold text-white text-[32px] md:text-[42px] md:text-center' >Realisations</h3>
            <span className=' w-[96px] border-b-2 border-[#FEB633]'></span>
        </div>

        <p className='text-[#8D9092] pt-6 px-6 md:p-0 '> {underTitle} </p>
   </section>
  )
}

export default Realisations;