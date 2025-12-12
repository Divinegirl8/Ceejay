import React, { useState } from 'react';
import luckyImage from "../../assets/new-portfolio/publications/image 198.png";
import blueArrowIcon from "../../assets/new-portfolio/publications/export.svg";
import blackArrowIcon from "../../assets/new-portfolio/publications/export copy.svg";
import laptopImage from "../../assets/new-portfolio/publications/Mask group (8).png";
import veoImage from "../../assets/new-portfolio/publications/Mask group (9).png";
import jetImage from "../../assets/new-portfolio/publications/Mask group (10).png";
import senseImage from "../../assets/new-portfolio/publications/Mask group (11).png";
import paperImage from "../../assets/new-portfolio/publications/Mask group (12).png";
import Form from '../../component/Form';


type TabType = 'View all' | 'Design' | 'Artificial Intelligence' | 'Business' | 'Lifestyle';

interface Publication {
  id: number;
  image: string;
  category: 'Design' | 'Artificial Intelligence' | 'Business' | 'Lifestyle';
  source: string;
  date: string;
  title: string;
  description: string;
}

const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('View all');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  
  const tabs: TabType[] = ['View all', 'Design', 'Artificial Intelligence', 'Business', 'Lifestyle'];
  
  const allPublications: Publication[] = [
    {
      id: 1,
      image: luckyImage,
      category: 'Lifestyle',
      source: 'Techeconomy.com',
      date: '18 Sep. 2025',
      title: 'Using Design to Make African Startups...',
      description: "Africa's startup sector is thriving, but one important piece that has often been missing is design that...",
  
    },
    {
      id: 2,
      image: laptopImage,
      category: 'Design',
      source: 'Medium.com',
      date: '22 Jun. 2025',
      title: "Why Apple's Design Feels So Right",
      description: 'Apple has long been known not just for innovation in technology but also for how its products make...',
      
    },
    {
      id: 3,
      image: veoImage,
      category: 'Artificial Intelligence',
      source: 'Medium.com',
      date: '02 Jun. 2025',
      title: 'Why Are There So Many AI Tools?',
      description: 'Last weekend, I had the honor of speaking at an AI training event hosted by Vow TV on May 30...',
    
    },
    {
      id: 4,
      image: jetImage,
      category: 'Artificial Intelligence',
      source: 'Medium.com',
      date: '07 Apr. 2025',
      title: "A Beginner's Guide for Generative Artists",
      description: 'Generative art is like magic. You type in a few words, and suddenly, a beautiful image appears...',
   
    },
    {
      id: 5,
      image: senseImage,
      category: 'Design',
      source: 'Medium.com',
      date: '10 Oct. 2025',
      title: 'Why Product Designers Need to Build',
      description: 'A few years ago, I asked myself a simple question that changed everything about how I approach design...',
 
    },
    {
      id: 6,
      image: paperImage,
      category: 'Design',
      source: 'Medium.com',
      date: '05 Apr. 2023',
      title: 'Staying Relevant As a Product Designer',
      description: 'Staying relevant in the tech industry as a product designer requires ongoing learning and skill...',
  
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop',
      category: 'Business',
      source: 'Dribbble.com',
      date: '15 Mar. 2023',
      title: 'The Future of UI/UX Design Trends',
      description: 'Exploring emerging design patterns and how they shape user experiences in modern applications...',
   
    }
  ];

  // Filter publications based on active tab
  const filteredPublications = activeTab === 'View all' 
    ? allPublications 
    : allPublications.filter(pub => pub.category === activeTab);

  // Get visible publications based on count
  const visiblePublications = filteredPublications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPublications.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setVisibleCount(6); // Reset count when changing tabs
  };

  return (
    <>
    
    <div className="xl:px-[8.5rem] lg:px-10 px-7 md:py-30 py-10">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-[35px] font-semibold text-black mb-4">Publications.</h2>
        <p className="text-[#626262] text-[16px] max-w-lg leading-relaxed font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lorem consectetur, porta enim id, pretium ligula. Donec ultricies massa id risus semper.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-16 mb-12 border-b border-gray-300 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`pb-4 text-sm font-[500] transition-colors relative  cursor-pointer ${
              activeTab === tab
                ? 'text-black'
                : 'text-[#626262] '
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900  cursor-pointer"></div>
            )}
          </button>
        ))}
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visiblePublications.map((pub) => (
          <div key={pub.id} className="overflow-hidden transition-shadow">
            {/* Image Section */}
            <div className={`relative  overflow-hidden`}>
              <img 
                src={pub.image} 
                alt={pub.title}
                className=" "
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md h-[70px] px-7 py-4  flex justify-between items-start text-white">
                <div className="text-[13px]">
                  <div className="font-semibold">{pub.source}</div>
                  <div className="opacity-90 font-normal">{pub.date}</div>
                </div>
                <div className="text-[13px] font-[700] ">
                  {pub.category}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {pub.description}
              </p>
              <button className="group flex items-center gap-2 text-[14px] font-[700] text-black hover:text-[#238EFF] cursor-pointer transition-colors">
                Read post
                <img src={blackArrowIcon} className='group-hover:hidden'/>
                <img src={blueArrowIcon} className='hidden group-hover:block'/>
                </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-20">
          <button 
            onClick={handleLoadMore}
            className="w-full  py-8 border-1 border-[#9CA0A4] text-black font-semibold text-[16px] hover:bg-gray-100 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>

    <Form/>
    
    
    </>
  );
};

export default Publications;