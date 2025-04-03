import { Link } from "react-router-dom";
import FilledButton from "../../components/resuables/FilledButton";
import lucky_image from  "../../assets/about/about-lucky.png";
import star from "../../assets/about/start.png";
import facebook from "../../assets/about/fb.png";
import twitter from "../../assets/about/twitter.png"
import linkedin from "../../assets/about/linkedin.png"
import HeroPage from "../../components/HeroPage";
import arrR from "../../assets/services/arrRight.png"
import arrL from "../../assets/services/arrLeft.png"
import arrUp from "../../assets/footer/arr-up.png" 
import rock from "../../assets/services/rock.png"



const Homepage:React.FC = () => {
   
    return(
        <div className="md:pt-[12rem] pt-[8rem]">

           <HeroPage/>

               {/* SERVICES START */}
           <div className="xl:px-20 px-5 md:px-3">
                <div className="text-white md:pt-40 pt-20 border-b-[0.25px] border-[#62646C] pb-5 ">
                            <p className="text-[#797C86] xl:text-[16px] text-[14px] font-[600]">SERVICES</p>
                            <div className="md:flex md:flex-row justify-between flex flex-col gap-4 md:gap-5">
                                <h1 className="font-[600] xl:text-[40px] md:text-[35px] text-[28px] md:mb-0 mb-4">
                                AI ART & PROMPT ENGINEERING SERVICES
                                </h1>

                                <div className="flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 md:w-[6rem] w-[6rem] h-12">
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

             <div className="mt-22 md:flex md:flex-row flex flex-col gap-16">
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
                  </div>
                </div>

                <div>
                    <img src={rock} className="w-[80rem] h-[30rem]" />
                </div>

            </div>

            </div>
                   {/* SERVICES ENDS */}

            {/* ABOUT START */}
            <div className="xl:px-20 px-5 md:px-3">
                <div className="text-white md:pt-40 pt-20 border-b-[0.25px] border-[#62646C] pb-5">
                    <p className="text-[#797C86] xl:text-[16px] text-[14px] font-[600]">ABOUT</p>
                    <div className="md:flex md:flex-row justify-between">
                        <h1 className="font-[600] xl:text-[40px] md:text-[35px] text-[28px] md:mb-0 mb-4">
                        PROMPT ENGINEER  |  AI ARTIST
                        </h1>
                
                        <Link to={"/"}>
                        <FilledButton text="Know More ->" bgColor="#2F2F37" wdt="130px" color="white" />
                        </Link>
                    </div>
                </div>
           
            <div className="md:flex md:flex-row justify-between pt-16 gap-10">
                <div className="">
                <img src={lucky_image} className="sm:w-full  md:max-w-[640px] sm:max-w-[800px] h-auto md:h-[600px] object-cover" />
                </div>

                <div className="border-[0.25px] border-[#62646C] rounded-[20px] w-full md:max-w-[630px] sm:max-w-[800px] sm:min-w-[50%] xl:h-[540px] md:h-auto sm:h-[510px]  pt-7 text-white xl:mt-6 md:mt-0 mt-6 ">

                        <div className="flex flex-row gap-2 xl:px-5 px-2">
                             <div>
                                <img src={star} className=" sm:w-9 w-6"/>
                             </div>

                             <div>
                                <h1 className="font-[500] sm:text-[28px] text-[18px] text-[#CACACE]">Introduction</h1>
                             </div>
                        </div>


                        <div className="font-[400] sm:text-[16px] text-[14px] text-[#AFB0B6] pl-1 pt-6 border-b-[0.25px] border-[#62646C]">
                            <p className="xl:px-5 px-2 pb-10">Hi, I’m Lucky. I specialize in combining advanced prompt engineering with AI artistry to create immersive, futuristic visuals. Each piece I craft emerges from sophisticated machine learning models, refined by my creative direction and honed through precise prompt engineering, to produce a truly unique digital composition. If you’re seeking art that defies conventions and sparks conversation, you’re in the right place.</p>
                        </div>

                        <div className="flex flex-row gap-2 pt-6 xl:px-5 px-2">
                             <div>
                                <img src={star} className="sm:w-9 w-6"/>
                             </div>

                             <div>
                                <h1 className="font-[500] sm:text-[28px] text-[18px] text-[#CACACE]">Contact Information</h1>
                             </div>
                        </div>


                        <div className="sm:flex sm:flex-row sm:justify-between xl:px-6 px-3 pt-5">
                            <div>
                                <h4 className="font-[500] sm:text-[15px] text-[13px] text-[#E4E4E6]">Email</h4>
                                <h5 className="font-[400] sm:text-[17px] text-[15px] text-[#AFB0B6] sm:pt-2">luckyekezie91@gmail.com</h5>
                            </div>

                            <div className="xl:pr-[10rem] sm:pr-[10rem] md:pr-0 ">
                                <h4 className="font-[500]  sm:text-[15px] text-[13px]  text-[#E4E4E6] sm:pt-0 pt-3">Phone Number</h4>
                                <h5 className="font-[400] sm:text-[17px] text-[15px] text-[#AFB0B6] sm:pt-2">+234 907 677 6981</h5>
                            </div>

                        </div> 

                        <div className="xl:flex sm:flex-row sm:flex xl:flex-row  md:flex-none justify-between xl:px-6 px-2 pt-7">
                                <div className="flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 xl:w-[9rem] md:w-[9rem] w-[9.6rem]">
                                    <img src={facebook} className="md:w-9 md:h-9 xl:x-10 xl:h-10 w-10 h-10 cursor-pointer"/>
                                    <img src={twitter}  className="md:w-9 md:h-9 xl:x-10 xl:h-10 w-10 h-10 cursor-pointer"/>
                                    <img src={linkedin} className="md:w-9 md:h-9 xl:x-10 xl:h-10 w-10 h-10 cursor-pointer"/>
                                </div>

                                <div className="sm:flex sm:flex-row justify-between gap-5 hidden md:hidden xl:flex xl:flex-row">

                                <Link to={"/"}>
                                   <FilledButton text="Let’s Work" bgColor="#2F2F37" wdt="174px" color="white" />
                                </Link>

                                <Link to={"/"}>
                                   <FilledButton text="Download CV" bgColor="#2F2F37" wdt="174px" color="white" />
                                </Link>

                                </div>


                                <div className=" sm:hidden xl:hidden md:flex md:flex-row justify-between gap-5 hidden">

                                <Link to={"/"}>
                                   <FilledButton text="Let’s Work" bgColor="#2F2F37" wdt="100px" color="white" />
                                </Link>

                                <Link to={"/"}>
                                   <FilledButton text="Download CV" bgColor="#2F2F37" wdt="100px" color="white" />
                                </Link>

                                </div>

                                <div className="sm:hidden flex flex-col gap-5 mt-5 mb-8">

                                <Link to={"/"}>
                                   <FilledButton text="Let’s Work" bgColor="#2F2F37" wdt="100%" color="white" />
                                </Link>

                                <Link to={"/"}>
                                   <FilledButton text="Download CV" bgColor="#2F2F37" wdt="100%" color="white" />
                                </Link>

                                </div>
                            </div>
                </div>


                
            </div>

            
        </div>

         {/* ABOUT ENDS */}

        </div>
    )
}

export default Homepage;