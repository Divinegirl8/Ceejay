import luckyPicture from "../../assets/new-portfolio/hero/lucky.png";
import arrowIcon from "../../assets/new-portfolio/navbar/Arrow.svg";
import style from "./index.module.css"

const Hero : React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return(
        <>
            <div 
                className="w-full h-screen relative overflow-hidden"
                id="home"
            >
                {/* Background image */}
                <img 
                    src={luckyPicture} 
                    alt="Lucky Ekezie"
                    className="w-full h-auto object-cover absolute top-0 left-0"
                />
              
                {/* Content overlay */}
                <div className="flex flex-col gap-2 items-center justify-center h-full pt-[18rem] relative z-10">
                    <h1 className="text-white text-[70px] font-semibold tracking-widest">
                        LUCKY EKEZIE
                    </h1>

                    <span className="text-[#DEDEDE] text-[25px] font-medium">AI-Driven Product Design Leader</span>

                    <div className={`flex flex-col items-center mt-14`}>
                        <div className={`${style.animateSlowBounce} cursor-pointer`} onClick={() => scrollToSection('nav')}><img src={arrowIcon} alt="Scroll down"/></div>
                    
                        <span className="text-[#DEDEDE] text-[14px] mt-2">SCROLL DOWN</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;