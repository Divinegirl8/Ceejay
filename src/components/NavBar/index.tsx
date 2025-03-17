import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import luckyLogo from "../../assets/navbar/luckyLogo.png";
import FilledButton from "../resuables/FilledButton";

const NavBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b-[0.25px] border-[#62646C] fixed w-full md:px-30 px-4 z-50">
      <div className="flex flex-row justify-between border-x-1 border-x-[#62646C] md:px-10 px-4 pt-8">
       
        <div>
          <img src={luckyLogo} className="md:w-[95px] h-[45px] mb-4 md:mb-0" />
        </div>

       
        <div className="text-[#AFB0B6] rounded-tl-[12px] rounded-tr-[12px] hidden  md:flex border-[0.25px] border-[#62646C] h-full items-center font-light">
          {navItems.map((item, index) => (
            <span
              key={index}
            className={` ${index === 0 ? " rounded-tl-[12px]" : ""} ${index === 3 ? "rounded-tr-[12px]" : ""} border-r-[0.25px] border-[#62646C] px-10 h-[70px] inline-flex items-center cursor-pointer  ${
                location.pathname === item.path
                  ? "text-white bg-[#2F2F37]" 
                  : "text-[#AFB0B6] bg-transparent" 
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>

      
        <div className="hidden md:block">
          <FilledButton text="Contact Me" bgColor="#1C1C1C" wdt="118px" color="white" />
        </div>

        <button
        className="md:hidden text-white border-[0.25px] border-[#62646C] border-r-0  border-b-0 pl-9 rounded-tl-[20px] w-[50px] flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        {menuOpen ? (
              <div className="relative w-5 h-5">
              <div className="absolute w-5 h-[2px] bg-white rotate-45 top-1/2 left-0 -translate-y-1/2"></div>
              <div className="absolute w-5 h-[2px] bg-white -rotate-45 top-1/2 left-0 -translate-y-1/2"></div>
            </div>
        ) : (
            <div className="flex flex-col space-y-1">
            <div className="w-5 h-[1.6px] bg-white rounded-xl"></div>
            <div className="w-5 h-[1.6px] bg-white rounded-xl"></div>
            <div className="w-3 h-[1.6px] bg-white rounded-xl ml-auto"></div>
            </div>
        )}
        </button>



        
      </div>


   

        {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#1C1C21] border-t border-[#62646C]">
          {navItems.map((item, index) => (
            <span
              key={index}
              className={`py-4 text-center border-b border-[#62646C] cursor-pointer ${
                location.pathname === item.path ? "text-white bg-[#2F2F37]" : "text-[#AFB0B6]"
              }`}
            >
              {item.name}
            </span>
          ))}
          <div className="py-4 text-center">
            <FilledButton text="Contact Me" bgColor="#2F2F37" wdt="100%" color="white" />
          </div>
        </div>
      )}

    </div>

    
  );
};

export default NavBar;
