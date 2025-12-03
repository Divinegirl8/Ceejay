import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/new-portfolio/navbar/logo.svg";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    

    const isHomePage = location.pathname === '/';

    const handleNavigation = (sectionId: string) => {
        if (isHomePage) {
            
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
        
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <>
            <div className="flex flex-row bg-white w-full px-20 py-6 justify-between items-center" id="nav">
                <div>
                    <img src={logo} width={70} alt="Logo"/>
                </div>

                <div className="flex gap-10 text-[#1F1F1F] text-[18px]">
                    <span className="cursor-pointer" onClick={() => handleNavigation('home')}>
                        HOME
                    </span>
                    <span className="cursor-pointer" onClick={() => handleNavigation('portfolio')}>
                        PORTFOLIO
                    </span>
                    <span className="cursor-pointer" onClick={() => handleNavigation('ai')}>
                        AI JOURNEY
                    </span>
                    <span className="cursor-pointer" onClick={() => handleNavigation('teaching')}>
                        TEACHING & MENTORSHIP
                    </span>
                    <span className="cursor-pointer" onClick={() => handleNavigation('contact')}>
                        CONTACT ME
                    </span>
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
    );
};

export default NavBar;