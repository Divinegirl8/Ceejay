import React, { useState } from 'react';
// import hoverArrow from "../../assets/new-portfolio/aijourney/Arrow (4).svg"
import arrow from "../../assets/new-portfolio/aijourney/Arrow 1 (2).svg";
import warrow from "../../assets/new-portfolio/aijourney/whitearr.svg";
import line from "../../assets/new-portfolio/aijourney/Line.svg";

const AiJourney = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(true);
  const [rowHeight, setRowHeight] = useState(0);

  const journeyItems = [
    {
      id: 1,
      title: "Generative Design",
      description: "Explored AI image generation to create hyper-realistic game characters, cinematic scenes, and motion graphics, blending human imagination with machine precision.",
      maxW: "max-w-[650px]",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "AI in Product Design",
      description: "Integrated AI workflows into design systems to improve usability testing, user research, and prototype generation, reducing iteration time while improving clarity and accessibility.",
      maxW: "max-w-[650px]",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "AI-Powered Motion Graphics",
      description: "Developed animated sequences using Runway ML and Midjourney for brand storytelling, combining design, movement, and AI-driven visuals for dynamic media experiences.",
      maxW: "max-w-[440px]",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Conversational Intelligence",
      description: "Founded Conversa, an early-stage AI startup that allows businesses to make and receive calls autonomously using natural, human-like voice automation.",
      maxW: "max-w-[450px]",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "AI Mentorship",
      description: "Taught designers and creators how to integrate AI into their workflow from creative exploration to automation strategy, helping them embrace AI as a collaborator rather than a replacement.",
      maxW: "max-w-[800px]",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const arrowButton = e.currentTarget.querySelector('.arrow-button');
    const itemId = Number(e.currentTarget.getAttribute('data-item-id'));
    
   
    if (itemId === 1) {
      const heading = document.querySelector('#ai h3');
      if (heading) {
        const headingRect = heading.getBoundingClientRect();
        const totalHeight = rect.bottom - headingRect.bottom;
        setRowHeight(totalHeight);
      }
    } else {
      setRowHeight(rect.height);
    }
    
    if (arrowButton) {
      const arrowRect = arrowButton.getBoundingClientRect();
      
      if (e.clientX >= arrowRect.left - 20) {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    }
    
    setMousePos({
      x: e.clientX,
      y: itemId === 1 ? (document.querySelector('#ai h3')?.getBoundingClientRect().bottom || rect.top) : rect.top
    });
  };

  return (
    <div id="ai" className="py-16 scroll-mt-[88px] bg-[#050A10] relative">
      <h3 className="text-[#FEFEFE] text-[70px] border-b border-[#424144] py-8 px-20">AI Journey</h3>

      <div className="mt-10">
        {journeyItems.map((item) => (
          <div key={item.id}>
            {item.id !== 1 && <div className="border-t border-[#424144]"></div>}
            <div
              data-item-id={item.id}
              className={`flex flex-row justify-between py-10 px-20 relative transition-colors duration-300 z-10 ${
                hoveredItem === item.id ? 'bg-[#15181C] cursor-none' : ''
              }`}
              onMouseEnter={() => {
                setHoveredItem(item.id);
                setShowImage(true);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
                setShowImage(true);
              }}
              onMouseMove={handleMouseMove}
            >
              <div className="flex flex-row gap-3 relative z-20">
                <h3 className={`font-[500] text-[48px] whitespace-nowrap transition-colors duration-300 ${
                  hoveredItem === item.id ? 'text-[#FEFEFE]' : 'text-[#A6A6A6]'
                }`}>
                  {item.title}
                </h3>
                <span className="text-[#FEFEFE] font-normal">0{item.id}</span>
                <img 
                    src={line} 
                    alt="arrow" 
                  />
              </div>

              <span className={`text-[#A6A6A6] ${item.maxW} text-[20px] relative z-20 ml-8 ${
                  hoveredItem === item.id ? 'text-[#FEFEFE]' : 'text-[#A6A6A6]'
                }`}>
                {item.description}
              </span>

              <div 
  className={`arrow-button flex items-center justify-center w-20 h-20 rounded-full cursor-pointer relative z-20 transition-all duration-300 ${
    hoveredItem === item.id ? 'bg-[#238EFF]' : 'bg-transparent'
  }`} 
>
  <img 
    src={hoveredItem === item.id ? warrow : arrow} 
    alt="arrow"
    className={`transition-transform duration-300 ${
      hoveredItem === item.id ? '-rotate-40' : '' 
    }`}
  />
</div>

              {hoveredItem === item.id && showImage && rowHeight > 0 && (
                <div
                  className="fixed pointer-events-none z-0"
                  style={{
                    left: mousePos.x + 'px',
                    top: mousePos.y + 'px',
                    transform: 'translate(-50%, 0)',
                    height: rowHeight + 'px'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[120px] h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiJourney;