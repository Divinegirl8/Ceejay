import React, { useState } from "react";
import conservaIcon from "../../assets/new-portfolio/testimonial/Conversa.svg";
import disableArrowIcon from "../../assets/new-portfolio/testimonial/Arrow (2).svg";
import enableArrowIcon from "../../assets/new-portfolio/testimonial/blackarr.svg";

import disablerArrowIcon from "../../assets/new-portfolio/testimonial/Arrow (3).svg";
import enablerArrowIcon from "../../assets/new-portfolio/testimonial/rightarr.svg";


interface Testimonial {
    text: string;
    name: string;
    title: string;
    avatar?: string;
}

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit. Quisque cursus leo in euismod imperdiet. Curabitur rhoncus sit amet lorem in feugiat. Phasellus consec tetur eget nibh a gravida. Proin pulvinar dolor a odio ultricies malesuada.",
            name: "Praise David Oku",
            title: "Product Designer"
        },

        {
            text: "Another testimonial text goes here. This is just a placeholder for demonstration purposes.",
            name: "John Doe",
            title: "Creative Director"
        },

        {
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit. Quisque cursus leo in euismod imperdiet. Curabitur rhoncus sit amet lorem in feugiat. Phasellus consec tetur eget nibh a gravida. Proin pulvinar dolor a odio ultricies malesuada.",
            name: "Daniel Oku",
            title: "Human Resource Manager"
        },
    ];

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    };

    return (
        <>
            <div className="px-20 py-10 max-md:hidden">
                <span className="text-[#626262] text-[18px] font-medium">CLIENT TESTIMONIALS</span>

                <div className="mt-10">
                    {/* Testimonial card */}
                    <div 
                        className="relative w-full h-[400px]  overflow-hidden"
                     
                    >
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 "></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            {/* Testimonial text */}
                            <div className="">
                                <p className="text-black text-[45px] leading-[1.4] font-normal">
                                    {testimonials[currentIndex].text}
                                </p>
                            </div>

                            {/* Bottom section with profile and navigation */}
                            <div className="flex items-center justify-between">
                                {/* Profile section */}
                                <div className="flex items-center gap-5">
                                    {/* Avatar placeholder */}
                                    <div className="w-[70px] h-[70px] rounded-full bg-gray-300"></div>
                                    
                                    {/* Name and title */}
                                    <div className="flex flex-col">
                                        <span className="text-black text-[20px] font-semibold">
                                            {testimonials[currentIndex].name}
                                        </span>
                                        <span className="text-[#666666] text-[16px] font-normal">
                                            {testimonials[currentIndex].title}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">

                                   
                                <button 
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                    className="transition-colors disabled:cursor-not-allowed cursor-pointer"
                                    aria-label="Previous testimonial"
                                >
                                    <img 
                                        src={currentIndex === 0 ? disableArrowIcon : enableArrowIcon} 
                                        alt={currentIndex === 0 ? "disabled arrow" : "previous"} 
                                    />
                                </button>

                                    <span className="text-black text-[18px] font-medium">
                                        {currentIndex + 1} / {testimonials.length}
                                    </span>


                                    <button 
                                    onClick={handleNext}
                                    disabled={currentIndex === testimonials.length - 1}
                                    className={`transition-colors disabled:cursor-not-allowed cursor-pointer`}
                                    aria-label="Next testimonial"
                                >
                                    <img 
                                        src={currentIndex === testimonials.length - 1? disablerArrowIcon : enablerArrowIcon} 
                                        alt={currentIndex === testimonials.length - 1 ? "disabled arrow" : "next"} 
                                    />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo grid */}
                <div className="flex flex-col gap-10 py-20 mt-10 justify-center items-center">
                    <div className="flex flex-row gap-[69px]">
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                    </div>

                    <div className="flex flex-row gap-[69px]">
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                        <img src={conservaIcon} alt="conversa"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;