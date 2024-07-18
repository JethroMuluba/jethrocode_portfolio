    import React, { useState } from 'react';
    import Slider from 'react-slick';
    import data from '../data/data.json';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import { IoArrowBackCircleOutline } from "react-icons/io5";
    import { IoArrowForwardCircleOutline } from "react-icons/io5";


        const ExperiencesCarousel = () => {
            const experienceData = data.workExperiences[1].experiences;
            const [currentIndex, setCurrentIndex] = useState(0);
        
            const handlePrevClick = () => {
            const newIndex = (currentIndex - 1 + experienceData.length) % experienceData.length;
            setCurrentIndex(newIndex);
            };
        
            const handleNextClick = () => {
            const newIndex = (currentIndex + 1) % experienceData.length;
            setCurrentIndex(newIndex);
            };
        
            return (
            <div className=" w-full px-4 sm:px-[30px] md:px-[50px] lg:px-[150px]">
                <div className="flex items-center justify-between px-4">
                    <button className="text-gray-400 active:text-[#FEB633] mr-3" onClick={handlePrevClick}>
                        <IoArrowBackCircleOutline size={30} />
                    </button>

                    <div className="flex justify-center gap-4 w-full md:flex-row md:gap- md:text-left ">
                        
                        {experienceData.map((experience, index) => (
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
                                    <p className="text-[#8D9092]">{experience.workDate}</p>
                                    <h3 className="text-[22px] font-semibold">{experience.poste}</h3>
                                    <p className="text-[#8D9092]">{experience.entreprise}</p>
                                </div>
                                
                                <p className="text-[#8D9092]">{experience.description}</p>
                            </div>

                        </div>
                        ))}
                        
                    </div>

                    <button className="text-[#8D9092] active:text-[#FEB633] ml-3" onClick={handleNextClick}>
                        <IoArrowForwardCircleOutline size={30} />
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                {experienceData.map((_, index) => (
                    <span
                    key={index}
                    className={`mx-1 h-2 w-2 rounded-full ${index === currentIndex ? 'bg-[#FEB633]' : 'bg-[#8D9092]'}`}
                    ></span>
                ))}
                </div>
            </div>
            );
        };
        
        export default ExperiencesCarousel;


    // <div className="container">
    // <Slider {...settings}>
    //     {experienceData.map((experience, index) => (
    //     <div key={index} className="p-4">
    //         <div className=" text-white p-6 rounded-md border border-[#8D9092] shadow-md">
    //         <p className="text-[#8D9092]">{experience.workDate}</p>
    //         <h3 className="text-xl font-bold">{experience.poste}</h3>
    //         <p className="text-[#8D9092]">{experience.entreprise}</p>
    //         <p className="text-[#8D9092]">{experience.description}</p>
    //         </div>
    //     </div>
    //     ))}
    // </Slider>
    // </div>


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     responsive: [
    //     {
    //         breakpoint: 20,
    //         settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //         }
    //     }
    //     ]
    // };