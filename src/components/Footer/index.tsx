import facebook from "../../assets/about/fb.png";
import twitter from "../../assets/about/twitter.png"
import linkedin from "../../assets/about/linkedin.png"
import arrUp from "../../assets/footer/arr-up.png" 

const Footer:React.FC = () =>{
   return(
    <>
      <div className="flex flex-row justify-between mt-20 border-b-[0.25px] border-[#62646C] ">
       
       <div className="flex flex-row  ">
       <div className="flex flex-col pt-20 gap-7">
            <div className="w-[5rem] h-7 bg-[#1C1C21]"></div>
            <div className="w-[5rem] h-7 bg-[#1C1C21]"></div>
            <div className="w-[5rem] h-7 bg-[#1C1C21]"></div>
        </div>



        <div className="flex flex-col gap-6 border-l-[0.25px] border-[#62646C]  px-14 border-r-[0.25px] pt-10 ">
            <h5 className="text-[#797C86] font-[600] text-[16px]">A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</h5>
            <div>
            <div className="flex flex-row gap-5">
             <h1 className="text-white font-[600] text-[48px]">Let’s</h1>
              <div className="bg-[#238EFF] w-[104px] h-[56px] flex items-center justify-center rounded-[50px]">
                <img src={arrUp} className="w-8 h-8"/>
              </div>
             </div>
             <h5 className="text-white font-[600] text-[48px]">Work Together</h5>

            </div>
        </div>

       </div>

       <div className="flex flex-row">

        <div className="flex flex-row gap-22 upper uppercase border-[#62646C]  px-14 border-r-[0.25px] space-y-[5rem]  pt-10">
            <div className=" flex flex-col gap-2">
                <h4 className="text-[#797C86]">Home</h4>
                <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">About Me</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[6rem] pb-1">My Works</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[7rem] pb-1">Testimonials</h4>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-[#797C86]">Clients</h4>

                <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Klovesto</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Nukeway</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Cloven’s</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">MenVol</h4>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-[#797C86]">Portfolio</h4>

                <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Events</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Portrait</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Branding</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Commerciale</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Wedding</h4>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-[#797C86]">Services</h4>
                <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b-[0.25px] border-[#62646C] w-[5rem] pb-1">Portraits</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[6rem] pb-1">Events</h4>
                <h4 className="border-b-[0.25px] border-[#62646C] w-[7rem] pb-1">Commercial</h4>
                </div>
            </div>

        </div>



       
        <div className="flex flex-col pt-20 gap-7">
            <div className="w-[5rem] h-7 bg-[#1C1C21]"></div>
            <div className="w-[5rem] h-7 bg-[#1C1C21]"></div>
            <div className="w-[5rem] h-7 bg-[#1C1C21]"></div>
        </div>

        </div>
      </div>




    
    <div className="md:flex md:flex-row sm:justify-between md:px-2 xl:px-18 mt-8 items-center flex flex-col gap-5 md:gap-6">

    <div className="text-[#797C86] flex flex-row font-[400] text-[14px]">
        <h4 className="border-r-[0.25px] border-[#62646C] px-2 h-5">Terms & Conditions</h4>
        <h4 className="pl-2">Privacy Policy</h4>
    </div>


    <div className="sm:flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 xl:w-[9rem] md:w-[9rem] w-[9.6rem] hidden">
             <img src={facebook} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
             <img src={twitter}  className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
            <img src={linkedin} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
    </div>


    <div>
        <h4 className="text-[#797C86]  font-[400] text-[14px]">© 2025 Lucky Ekezie Artistry. All rights reserved.</h4>
    </div>

    <div className="flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 xl:w-[9rem] md:w-[9rem] w-[9.6rem] sm:hidden">
             <img src={facebook} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
             <img src={twitter}  className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
            <img src={linkedin} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
    </div>





    </div>
    
    </>
   )
}

export default Footer;