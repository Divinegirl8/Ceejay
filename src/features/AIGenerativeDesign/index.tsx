import React from 'react';
import mysteryImage from "../../assets/new-portfolio/ai/luckyekezie_A_mystical_African_woman_emerging_from_an_organic_d3d7a17a 1.png";
import castleImage from "../../assets/new-portfolio/ai/IMG_6346 (1) 2.png";
import roadImage from "../../assets/new-portfolio/ai/luckyekezie._A_car_in_the_city_--v_6.1_88df20b6-7dc6-42ad-8967-439ed60c5f89_0 1.png"
import Form from '../../component/Form';

const AIGenerativeDesign: React.FC = () => {
  const designs = [
    {
      id: 1,
      image: mysteryImage,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lorem consectetur.',
      photoCount: '10 Photos'
    },
    {
      id: 2,
      image: castleImage,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lorem consectetur.',
      photoCount: '15 Photos'
    },
    {
      id: 3,
      image: roadImage,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lorem consectetur.',
      photoCount: '8 Photos'
    }
  ];

  return (
    <>
    <div className="xl:px-[8.5rem] lg:px-10 px-7 md:py-30 py-10">
      {/* Header */}
      <div className="mb-12">
        <h2 className="md:text-[35px] text-[25px] font-[600] text-black mb-4">AI Generative Design.</h2>
        <p className="text-[#626262] text-[16px] max-w-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lorem consectetur, porta enim id, pretium ligula. Donec ultricies massa id risus semper.
        </p>
      </div>

      {/* Design Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design) => (
          <div 
            key={design.id}
            className="relative group cursor-pointer overflow-hidden  bg-gray-900"
          >
            {/* Image */}
            <img 
              src={design.image}
              alt="Generative design"
              className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col">
  
         
            <div className="flex items-start mt-5">
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                <span className="w-[10px] h-[10px] bg-[#238EFF] "></span>
                Generative design
                </span>
            </div>

       
            <div className="flex flex-col justify-between h-full mt-4">
                
     
                <h3
                className="text-white text-lg font-semibold leading-tight 
                            opacity-0 group-hover:opacity-100 
                            transform translate-y-6 group-hover:translate-y-0 
                            transition-all duration-300"
                >
                {design.title}
                </h3>

                <div
                className="flex items-center gap-2 text-white text-sm 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300"
                >
          
                <span>{design.photoCount}</span>
                </div>

            </div>
            </div>

          </div>
        ))}
      </div>
    </div>

    <Form/>

    </>
  );
};

export default AIGenerativeDesign;