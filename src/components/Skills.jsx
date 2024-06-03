import React from 'react';
import data from '../data/data.json';

function Skills() {
    const skillsData = data.skills;
    console.log(skillsData);
  return (
    <section className=' hidden  bg-[#303131] w-full md:grid md:grid-cols-8 gap-8 items-center px-6   md:flex-row md:justify-center md:gap-10 md:px-[50px] lg:px-[150px] '>
        { skillsData ? (skillsData.map((data) => (
            <div key={data.id} className=' flex flex-col justify-center gap-6 text-center'>
                <div className=' flex flex-col gap-1 justify-center items-center'>
                    <img src= {data.logo} alt= {data.name} />
                    <p className=' text-white font-semiBold text-[20px]'> {data.level} </p>
                </div>
                <h4 className=' text-white font-normal text-sm'>
                    {data.name}
                </h4>
            </div>
        ))) : ('No Skills Added') }
    </section>
  )
}

export default Skills;