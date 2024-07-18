import React, { useEffect, useRef, useState } from 'react';
import data from '../data/data.json'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

function AboutMe() {

    const [displyToggle, setDisplayToggle] = useState(false);
    const toggleRef = useRef(null);
    const handleClickButton = () => {
        setDisplayToggle(!displyToggle)
    };

    useEffect (() => {
        const handleClickOutside = (event) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target)) {
                setDisplayToggle(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const viewWorkData = data.viewWork;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + viewWorkData.length) % viewWorkData.length;
    setCurrentIndex(newIndex);
    };

    const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % viewWorkData.length;
    setCurrentIndex(newIndex);
    };
  return (
    <section id="about-me" className=' w-full bg-[#303131] bg-[center_left]  bg-about-motif bg-no-repeat md:bg-[center_left_9rem] md:flex md:flex-row text-center md:text-left py-[50px] md:justify-center md:gap-24 md:items-center '>
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
                <button onClick={handleClickButton} className=' bg-[#FEB633] hover:bg-[#303131] text-sm font-semibold hover:border hover:border-[#FEB633] text-white hover:text-[#FEB633] py-[14px] px-[50px] md:ml-0   rounded-md active:border-2 active:border-[#fff]'> View Work</button>
                <a href='/Jethro_Muluba Cv FullStack Developer.pdf' download className=' bg-none hover:bg-[#FEB633] text-sm font-semibold border border-[#FEB633] text-[#FEB633] hover:text-[#FFF] py-[12px] px-[50px] md:m-0   rounded-md active:border-2 active:border-[#fff]'>Download CV</a>
            </div>
            
        </div>
        {displyToggle && (
                <div className=" absolute w-full px-4 sm:px-[30px] md:px-[50px] lg:px-[150px]">
                <div className="flex items-center justify-between px-4">
                    <button className="text-gray-400 active:text-[#FEB633] mr-3" onClick={handlePrevClick}>
                        <IoArrowBackCircleOutline size={30} />
                    </button>

                    <div className="flex justify-center gap-4 w-full md:flex-row md:gap- md:text-left ">
                        
                        {viewWorkData.map((work, index) => (
                        <div
                            key={index}
                            className={`  border border-[#8D9092] text-white px-6 py-12 rounded-md shadow-md w-full md:w-1/3 transition-transform transform ${
                            (index >= currentIndex && index < currentIndex + 1) || 
                            (window.innerWidth >= 768 && index >= currentIndex && index < currentIndex + 3) 
                                ? 'scale-100' 
                                : 'scale-0'
                            }`}
                            style={{
                            display: 
                            (index >= currentIndex && index < currentIndex + 1) || 
                            (window.innerWidth >= 768 && index >= currentIndex && index < currentIndex + 3) 
                                ? 'block' 
                                : 'none'
                            }}
                        >
                            <div className='flex flex-col gap-[20px]'>
                                <div className='flex flex-col gap-[5px]'>
                                    <p className="text-[#8D9092]">{work.clientName}</p>
                                    <h3 className="text-[22px] font-semibold">{work.projectName}</h3>
                                    <p className="text-[#8D9092]">{work.link}</p>
                                </div>
                                
                            </div>

                        </div>
                        ))}
                        
                    </div>

                    <button className="text-[#8D9092] active:text-[#FEB633] ml-3" onClick={handleNextClick}>
                        <IoArrowForwardCircleOutline size={30} />
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                {viewWorkData.map((_, index) => (
                    <span
                    key={index}
                    className={`mx-1 h-2 w-2 rounded-full ${index === currentIndex ? 'bg-[#FEB633]' : 'bg-[#8D9092]'}`}
                    ></span>
                ))}
                </div>
            </div>
            )}


    </section>
  )
}

export default AboutMe;