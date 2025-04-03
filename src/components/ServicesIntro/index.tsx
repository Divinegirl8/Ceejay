import arrR from "../../assets/services/arrRight.png"
import arrL from "../../assets/services/arrLeft.png"
import arrUp from "../../assets/footer/arr-up.png" 
import rock from "../../assets/services/rock.png"
import darkStar from "../../assets/services/darkStar.png"
import { Link } from "react-router-dom"
import FilledButton from "../../components/resuables/FilledButton";

const ServicesIntro = () =>{
    return(
        <>
            {/* SERVICES START */}
            <div className="xl:px-20 px-5 md:px-3">
                <div className="text-white md:pt-40 pt-20 border-b-[0.25px] border-[#62646C] pb-5 ">
                            <p className="text-[#797C86] xl:text-[16px] text-[14px] font-[600]">SERVICES</p>
                            <div className="md:flex md:flex-row justify-between flex flex-col gap-4 md:gap-5">
                                <h1 className="font-[600] xl:text-[40px] md:text-[35px] text-[28px] md:mb-0 mb-4">
                                AI ART & PROMPT ENGINEERING SERVICES
                                </h1>

                                <div className="md:flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 md:w-[6rem] w-[6rem] h-12 hidden">
                                <div className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center">
                                    <img src={arrR} className="w-3 h-3 cursor-pointer"/>
                                </div>


                                <div className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center">
                                    <img src={arrL} className="w-3 h-3 cursor-pointer"/>
                                </div>
        
                                </div>
                        
                                <Link to={"/"} >
                                <FilledButton text="View All Services ->" bgColor="#2F2F37" wdt="150px" color="white" />
                                </Link>
                            </div>
                </div>

                <div>
                    <img src={rock} className="w-[100rem] h-[23rem] sm:h-[30rem] sm:w-[50rem]  md:hidden mt-10" />
                </div>

             <div className="md:mt-22 mt-10 md:flex md:flex-row flex flex-col gap-16">
                <div>
                   <div className="flex flex-row gap-5">
                        <h1 className="text-white font-[600] xl:text-[35px] text-[25px]">GAME & ENVIRONMENT DESIGN</h1>
                        <div className="bg-[#238EFF] w-[94px] h-[46px]  flex items-center justify-center rounded-[50px]">
                           <img src={arrUp} className="w-3 h-3"/>
                         </div>
                    </div>

                  <h4 className="text-[#CACACE] font-[500] text-[20px] upper uppercase mt-5">Bring Virtual Worlds to Life</h4>
                  <p className="text-[#797C86] font-[400] mt-5 text-[16px]">From designing immersive game environments and characters to crafting detailed gameplay and level designs, this service is ideal for video games, VR experiences, and interactive media. Create captivating worlds that engage players and audiences alike.</p>

                  <div>
                    <h4 className="text-[#CACACE] font-[500] text-[16px] mt-12">Service Highlights</h4>

                    <div className="mt-5 flex flex-row gap-2 border-[0.25px] border-[#62646C] px-4 py-2 rounded-[5px] md:w-[80%]">
                        <img src={darkStar} className="w-7 h-7"/>
                        <p className="upper uppercase text-[#AFB0B6] font-[400] text-[16px]">In-depth character and environmental concept art</p>
                    </div>


                    <div className="mt-5 flex flex-row gap-2 border-[0.25px] border-[#62646C] px-4 py-2 rounded-[5px] md:w-[80%]">
                        <img src={darkStar} className="w-7 h-7"/>
                        <p className="upper uppercase text-[#AFB0B6] font-[400] text-[16px]">Interactive design elements tailored for gameplay</p>
                    </div>


                    <div className="mt-5 flex flex-row gap-2 border-[0.25px] border-[#62646C] px-4 py-2 rounded-[5px] md:w-[80%]">
                        <img src={darkStar} className="w-7 h-7"/>
                        <p className="upper uppercase text-[#AFB0B6] font-[400] text-[16px]">Realistic rendering and immersive detailing</p>
                    </div>


                    <div className="mt-5 flex flex-row gap-2 border-[0.25px] border-[#62646C] px-4 py-2 rounded-[5px] md:w-[80%]">
                        <img src={darkStar} className="w-7 h-7"/>
                        <p className="upper uppercase text-[#AFB0B6] font-[400] text-[16px]">Advanced 2D/3D modeling and texturing for dynamic world-building</p>
                    </div>

                  </div>
                </div>

                <div>
                    <img src={rock} className="w-[100rem] h-[35rem] md:block hidden" />
                </div>

            </div>

            <div className="flex justify-center items-center h-full w-full mt-[-2rem]">
               <div className="md:hidden flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 md:w-[6rem] w-[6rem] h-12 justify-center items-center">
                 <div className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center">
                     <img src={arrR} className="w-2 h-2 cursor-pointer"/>
                 </div>

                 <div className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center">
                     <img src={arrL} className="w-2 h-2 cursor-pointer"/>
                </div>
            </div>
        </div>

                  
            </div>
                   {/* SERVICES ENDS */}
        
        </>
    )
}
export default ServicesIntro;