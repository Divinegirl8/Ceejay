import arrowButtonIcon from "../../assets/new-portfolio/teaching/Arrow (1).svg"

const Teaching : React.FC = () => {
    return(
        <>

        <div className="px-20 scroll-mt-[88px] py-16" id="teaching">

        <div className="flex flex-col">
                    <span className="text-[#626262] text-[18px] font-medium">TEACHING & MENTORSHIP</span>
                    <h2 className="text-[#000000] text-[50px] font-medium leading-tight mt-5">
                    <span className="block">Innovation, Excellence, and</span>
                    <span className="block">Success Combined</span>
                    </h2>
            </div>


            <div className="flex flex-row justify-between gap-5">

                <div className="flex flex-col gap-4 mt-16">
                    <h4 className="text-[#626262] text-[16px]">PRODUCT DESIGN</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] text-[30px]  font-medium leading-tight ">
                    <span className="block">Innovation, Excellence, and</span>
                    <span className="block">Success Combined</span>
                    </h2>
                        <span>August, 2025</span>

                        <div className="mt-3">
                            <div className="w-[24rem] h-[24rem] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-16">
                    <h4 className="text-[#626262] text-[16px]">UX DESIGN</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] text-[30px]  font-medium leading-tight ">
                    <span className="block">Innovation, Excellence, and</span>
                    <span className="block">Success Combined</span>
                    </h2>
                        <span>August, 2025</span>

                        <div className="mt-3 flex flex-col gap-10 ">
                            <div className="w-[24rem] h-[12rem] bg-[#D9D9D9]"></div>
                            <div className="flex justify-end mr-10">
                                  <img src={arrowButtonIcon} alt="arrow" className="cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4 mt-16">
                    <h4 className="text-[#626262] text-[16px]">ARTIFICIAL INTELLIGENCE</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] text-[30px]  font-medium leading-tight ">
                    <span className="block">Innovation, Excellence, and</span>
                    <span className="block">Success Combined</span>
                    </h2>
                        <span>August, 2025</span>

                        <div className="mt-3">
                            <div className="w-[24rem] h-[20rem] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
        
        </>
    )
}

export default Teaching