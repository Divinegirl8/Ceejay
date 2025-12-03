import koboPicture from "../../assets/new-portfolio/kobo/fifth-section/Group (3).png";

const FifthSection: React.FC = () => {
    return (
        <>
           <div className="border-t border-b border-[#5A5A5A] flex flex-row">
       

       <div className="w-1/2  border-[#5A5A5A] border-r px-20 py-16">
            <h1 className="text-[#000000] text-[32px] text-center font-normal mb-6">
            UI Kit
            </h1>

            
            <div className="space-y-10">
                <div>
                    <h2 className="text-[#000000] text-[16px] font-medium mb-2">
                    Visual Language
                    </h2>
                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                    The design uses Kobo's signature teal as the primary action color,
                    paired with clean whites and strategic use of color-coded categories
                    (green for income, red for expenses, purple for savings). Typography
                    emphasizes hierarchy with clear CTAs and readable transaction details.
                    Card designs feel premium yet approachable—virtual cards display
                    with subtle gradients and real-time balance updates. Micro-
                    interactions provide satisfying feedback: smooth transitions, success
                    animations, and haptic responses that make digital transactions feel
                    tangible and secure.                       
                    </p>
                </div>

            </div>
       </div>


       <div className="w-1/2  justify-center bg-[#F2F2F2] items-center flex px-10">
          <img src={koboPicture} className=""/>
       </div>
    </div>
        </>
    );
};

export default FifthSection;