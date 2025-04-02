import { Link } from "react-router-dom";
import FilledButton from "../../components/resuables/FilledButton";


const Homepage:React.FC = () => {
    return(
        <div>


            {/* ABOUT */}
            <div className="xl:px-20 px-5 md:px-6 ">
                <div className="text-white md:pt-50 pt-26 border-b-[0.25px] border-[#62646C] pb-5">
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
            </div>
        </div>
    )
}

export default Homepage;