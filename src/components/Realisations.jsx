import React from 'react';
import data from '../data/data.json';

function Realisations() {

    const underTitle = data.realisations[0].underTitle;
    const iconeWebMobile = data.realisations[1].iconeWebMobile;
  return (
   <section className=' w-full flex flex-col gap-8 items-center text-center py-[50px]'>
        <div className=' flex flex-col gap-2 items-center md:w2/4   '>
            <h3 className=' font-semibold text-white text-[32px] md:text-[42px] md:text-center' >Services</h3>
            <span className=' w-[96px] border-b-2 border-[#FEB633]'></span>
        </div>

        <p className='text-[#8D9092]  px-6 md:px-60  md:p-0 '> {underTitle} </p>

        <div className=' w-full flex flex-col gap-4 text-left text-white px-6 md:grid md:grid-cols-2 md:px-[50px] lg:px-[230px]'>

            <div className='flex flex-col gap-2 py-[30px] px-[30px] bg-gradient-to-r from-[#25CDE9] to-[#247AE9] rounded-md cursor-pointer  '>
                <img className='w-[35px]' src={iconeWebMobile} alt="icone Web & Mobile" />

                <h3 className=' text-[22px] font-semibold'> UX & UI Design</h3>

                <p className='font-light '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>

            <div className='flex flex-col gap-2 py-[30px] px-[30px] bg-gradient-to-r from-[#EAC225] to-[#E69824] rounded-md  cursor-pointer '>
                <img className='w-[35px]' src={iconeWebMobile} alt="icone Web & Mobile" />

                <h3 className=' text-[22px] font-semibold'> Web Development</h3>

                <p className='font-light '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>

            <div className='flex flex-col gap-2 py-[30px] px-[30px] bg-gradient-to-r from-[#E02F95] to-[#AB3AE0] rounded-md  cursor-pointer '>
                <img className='w-[35px]' src={iconeWebMobile} alt="icone Web & Mobile" />

                <h3 className=' text-[22px] font-semibold'> App Design</h3>

                <p className='font-light '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>

            <div className='flex flex-col gap-2 py-[30px] px-[30px] bg-gradient-to-r from-[#06B459] to-[#07C716] rounded-md cursor-pointer  '>
                <img className='w-[35px]' src={iconeWebMobile} alt="icone Web & Mobile" />

                <h3 className=' text-[22px] font-semibold'>App Development</h3>

                <p className='font-light '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
        </div>
        
   </section>
  )
}

export default Realisations;