import koboPicture from "../../assets/new-portfolio/kobo/first-section/kobo.png";

const FirstSection: React.FC = () => {
    return (
        <>
            <div className="border-t border-[#5A5A5A] flex flex-row">
              
                <div className="w-1/2  border-r border-[#5A5A5A] flex flex-col">
                   
                <div className="border-b px-20  py-10 border-[#5A5A5A] relative">
                        <h1 className="text-[#000000] text-[50px] font-normal leading-tight mb-8">
                            <span className="block">Packaging</span>
                            <span className="block">Design for ABC</span>
                            <span className="block">Product</span>
                        </h1>
                        
                        <button className="absolute -bottom-[26px] right-16 px-8 py-3 border border-[#5A5A5A] bg-white rounded-full text-base hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                            Visit Website 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#1E1E1E"/>
                            </svg>
                        </button>
                    </div>

                    
                    <div className="px-16 py-16 flex-1">
                        <h2 className="text-[#000000] text-[32px] text-center font-normal mb-6">
                            Project Brief
                        </h2>
                        
                        <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                            <p>
                                Design a comprehensive financial management platform within the Kobo Connect ecosystem that serves as the secure cornerstone for digital transactions across Africa. The goal was to create an intuitive financial hub where users, from students and freelancers to small business owners, can send and receive money instantly, generate virtual cards for online shopping, track spending patterns, set budgets, and manage multiple accounts without ever feeling overwhelmed.
                            </p>
                            
                            <p>
                                The platform needed to address Africa's unique financial landscape: fragmented payment systems, limited access to traditional banking, security concerns around digital money, and the growing demand for seamless e-commerce experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 my-auto py-10">
            <div className="flex flex-row justify-evenly items-stretch gap-8 px-14  ">
                <div className="">
                    <img 
                        src={koboPicture} 
                        alt="Kobo App Interface"
                    />
                </div>

        <div className="flex flex-col justify-between">
            <div className="text-[#000000] text-sm tracking-wider z-10"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                Date <span className="font-[600]">01.01.2025</span>
            </div>
            
            <div className="text-[#000000] text-base font-medium tracking-wide z-10"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                Portfolio Design
            </div>
            
            <div className="text-[#000000] text-sm tracking-wider z-10 font-medium"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                02
            </div>
        </div>
    </div>
</div>



            </div>
        </>
    );
};

export default FirstSection;