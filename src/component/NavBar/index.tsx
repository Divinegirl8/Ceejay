import logo from "../../assets/new-portfolio/navbar/logo.svg";

const NavBar: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <>
        
        <div className="flex flex-row bg-white w-full  px-20 py-6 justify-between items-center" id="nav">
            <div>
                <img src={logo} width={70}/>

            </div>

            <div className="flex gap-10 text-[#1F1F1F] text-[18px]">

                <span className="cursor-pointer"  onClick={() => scrollToSection('home')}>HOME</span>
                <span className="cursor-pointer" onClick={() => scrollToSection('portfolio')}>PORTFOLIO</span>
                <span className="cursor-pointer" onClick={() => scrollToSection('ai')}>AI JOURNEY</span>
                <span className="cursor-pointer" onClick={() => scrollToSection('teaching')}>TEACHING & MENTORSHIP</span>
                <span className="cursor-pointer" onClick={() => scrollToSection('contact')}>CONTACT ME</span>
            </div>

            <div>

            <div className="flex flex-col space-y-[7px] cursor-pointer">
            <div className="w-9 h-[2.5px] bg-black rounded-xl"></div>
            <div className="w-8 h-[2.5px] bg-black rounded-xl ml-auto"></div>
            <div className="w-6 h-[2.5px] bg-black rounded-xl ml-auto"></div>
            </div>

            </div>
        </div>
        
    

        </>
    )
}

export default NavBar;