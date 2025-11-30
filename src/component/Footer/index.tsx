import linkedinIcon from "../../assets/new-portfolio/footer/LinkedIn.svg";
import facebookIcon from "../../assets/new-portfolio/footer/Facebook.svg";
import instagramIcon from "../../assets/new-portfolio/footer/Instagram.svg";
import mediumIcon from "../../assets/new-portfolio/footer/Medium.svg";
import xIcon from "../../assets/new-portfolio/footer/X.svg";
import copyIcon from "../../assets/new-portfolio/footer/c.svg";
import luckyEkezieIcon from "../../assets/new-portfolio/footer/LUCKY EKEZIE.svg";

const Footer:React.FC = () =>{
    return(
        <>

        <div className="px-20 py-10 bg-white">

            <div className="flex flex-col leading-tight"> 
                <span className="text-[#000000] font-[600] text-[60px]">Let’s create</span>
                <span className="text-[#626262] font-[600] text-[60px]">incredible work together.</span>

            </div>

 
            <div className="flex flex-row justify-between items-center  border-b-1 border-[#CBCBCB] py-8">

                <div className=" flex flex-col gap-1">
                    <span className="text-[#626262] text-[17px]">Email</span>
                    <span className="font-[500] text-[20px]">luckyekezie91@gmail.com</span>
                </div>

                <div  className=" flex flex-col  gap-1">
                    <span className="text-[#626262] text-[17px]">Chat Me on LinkedIn</span>
                    <span className="font-[500] text-[20px]">Lucky Ekezie</span>
                </div>

                <div  className=" flex flex-col  gap-2 mr-20">
                    <span className="text-[#626262] text-[17px]">Social</span>
                    <div className="flex flex-row gap-2">
                        <img src={linkedinIcon} alt="linkedin"/>
                        <img src={xIcon} alt="x"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={instagramIcon} alt="instagram"/>
                        <img src={mediumIcon} alt="medium"/>

                    </div>
                </div>

            </div>


             
            <div className="flex flex-row justify-between py-10">

                <div>
                    <span className="text-[#626262]">All Rights Reserved</span>

                </div>


                <div className="flex flex-row gap-2">
                    <img src={copyIcon} alt="copy"/>
                    <span className="text-[#626262]">2025 Lucky Ekezie</span>

                </div>

            </div>


             
            <div className="mt-10 flex items-center justify-center">

                <img src={luckyEkezieIcon} className="lucky"/>

            </div>


        </div>
        
        </>
    )
}

export default Footer;