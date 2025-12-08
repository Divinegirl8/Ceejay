import arrowButtonIcon from "../../assets/new-portfolio/teaching/Arrow (1).svg"

const Teaching : React.FC = () => {
    return(
        <>

        <div className="xl:px-20 px-7 lg:px-10  scroll-mt-[88px] md:py-16 py-16  max-md:scroll-mt-[60px]" id="teaching">

        <div className="flex flex-col">
                    <span className="text-[#626262] text-[18px] font-medium">TEACHING & MENTORSHIP</span>
                    <h2 className="text-[#000000] md:text-[50px] text-[35px] font-medium leading-tight mt-5">
                    <span className="block">Innovation, Excellence, and</span>
                    <span className="block">Success Combined</span>
                    </h2>
            </div>

{/* 
            <div className="flex lg:flex-row flex-col justify-between gap-5">

                <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
                    <h4 className="text-[#626262] text-[16px]">PRODUCT DESIGN</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                    <span className="block">Empowering the Next</span>
                    <span className="block">Generation of Designers</span>
                    </h2>
                        <span className="text-[14px]">August, 2025</span>

                        <div className="mt-3">
                            <div className="md:w-[24rem] h-[24rem] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
                    <h4 className="text-[#626262] text-[16px]">UX DESIGN</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                    <span className="block">Crafting User-Centered</span>
                    <span className="block">Experiences</span>
                    </h2>
                        <span className="text-[14px]">August, 2025</span>

                        <div className="mt-3 flex flex-col gap-10 ">
                            <div className="md:w-[24rem] lg:h-[12rem] h-[24rem] bg-[#D9D9D9]"></div>
                            <div className="justify-end mr-10 hidden lg:flex">
                                  <img src={arrowButtonIcon} alt="arrow" className="cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
                    <h4 className="text-[#626262] text-[16px]">ARTIFICIAL INTELLIGENCE</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                    <span className="block">Enhancing Ministry Through AI</span>
                    <span className="block">Powered Creativity</span>
                    </h2>
                        <span className="text-[14px]">May, 2025</span>

                        <div className="mt-3">
                            <div className="md:w-[24rem] max-lg:h-[24rem] h-[20rem] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </div> */}

<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
    <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
        <h4 className="text-[#626262] text-[16px]">PRODUCT DESIGN</h4>

        <div className="flex gap-3 flex-col">
            <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                <span className="block">Empowering the Next</span>
                <span className="block">Generation of Designers</span>
            </h2>
            <span className="text-[14px]">August, 2025</span>

            <div className="mt-3">
                <div className="xl:w-[24rem] h-[24rem] bg-[#D9D9D9]"></div>
            </div>
        </div>
    </div>
    
    <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
        <h4 className="text-[#626262] text-[16px]">UX DESIGN</h4>

        <div className="flex gap-3 flex-col">
            <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                <span className="block">Crafting User-Centered</span>
                <span className="block">Experiences</span>
            </h2>
            <span className="text-[14px]">August, 2025</span>

            <div className="mt-3 flex flex-col gap-10 ">
                <div className="xl:w-[24rem] lg:h-[12rem] h-[24rem] bg-[#D9D9D9]"></div>
                <div className="justify-end mr-10 hidden lg:flex">
                    <img src={arrowButtonIcon} alt="arrow" className="cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>

    <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
        <h4 className="text-[#626262] text-[16px]">ARTIFICIAL INTELLIGENCE</h4>

        <div className="flex gap-3 flex-col">
            <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                <span className="block">Enhancing Ministry Through </span>
                <span className="block">AI Powered Creativity</span>
            </h2>
            <span className="text-[14px]">May, 2025</span>

            <div className="mt-3">
                <div className="xl:w-[24rem] max-lg:h-[24rem] h-[20rem] bg-[#D9D9D9]"></div>
            </div>
        </div>
    </div>
</div>

        </div>
        
        
        </>
    )
}

export default Teaching