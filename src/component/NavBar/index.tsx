import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/new-portfolio/navbar/logo.svg";
import linkedinIcon from "../../assets/new-portfolio/footer/LinkedIn.svg";
import facebookIcon from "../../assets/new-portfolio/footer/Facebook.svg";
import instagramIcon from "../../assets/new-portfolio/footer/Instagram.svg";
import mediumIcon from "../../assets/new-portfolio/footer/Medium.svg";
import xIcon from "../../assets/new-portfolio/footer/X.svg";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>

            <div className="flex flex-row bg-white w-full px-20 py-6 justify-between items-center relative z-50" id="nav">
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
                    <div 
                        className="flex flex-col space-y-[7px] cursor-pointer" 
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <div className="w-9 h-[2.5px] bg-black rounded-xl"></div>
                        <div className="w-8 h-[2.5px] bg-black rounded-xl ml-auto"></div>
                        <div className="w-6 h-[2.5px] bg-black rounded-xl ml-auto"></div>
                    </div>
                </div>
            </div>

           
            {isMenuOpen && (
                <>
                    <div className="fixed top-0 left-0 right-0 flex flex-row bg-[#F5F5F5] w-full px-20 py-6 justify-center items-center z-50">
                        <div>
                            <img src={logo} width={70} alt="Logo"/>
                        </div>
                        
                        <div 
                            className="absolute right-20 cursor-pointer text-4xl font-light"
                            onClick={() => setIsMenuOpen(false)}
                        >
                             <div className="w-9 h-[2.5px] bg-black rounded-xl"></div>
                        </div>
                    </div>

            
                    <div className="fixed top-[89px] left-0 right-0 gap-5 bg-[#F5F5F5] w-full z-50 px-20 py-12 flex flex-row justify-evenly items-center">
                        <div className="">
                            <div className="flex flex-col gap-6 text-[#000000] text-[25px] mb-20 font-medium">
                                <span className="cursor-pointer hover:opacity-70">About me</span>
                                <span className="cursor-pointer hover:opacity-70">My resume</span>
                                <span className="cursor-pointer hover:opacity-70">Publications</span>
                            </div>
                            
                            <div className="pt-6 border-t border-gray-400">
                                <div className="flex items-center justify-between gap-5">
                                    <span className="text-[15px] text-[#1F1F1F]">luckyekezie@gmail.com</span>
                                    <div className="flex flex-row gap-2">
                        <img src={linkedinIcon} alt="linkedin"/>
                        <img src={xIcon} alt="x"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={instagramIcon} alt="instagram"/>
                        <img src={mediumIcon} alt="medium"/>

                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className="bg-[#AEAEAE] w-[320px] h-[350px]"></div>
                            <div className="bg-[#D7D7D7] w-[320px] h-[350px]"></div>
                        </div>
                    </div>

                    
                    <div 
                        className="fixed inset-0 z-40"
                        style={{ backgroundColor: 'rgba(80, 80, 80, 0.45)' }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                </>
            )}
        </>
    );
};

export default NavBar;