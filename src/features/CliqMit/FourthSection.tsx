import sketchImage from "../../assets/new-portfolio/cliqmit/fourth-section/2 (4).png";

const FourthSection : React.FC = () => {
    return(
        <>
        
        <div className="border-t  border-[#5A5A5A] flex flex-row">
       

       <div className="w-1/2  border-[#5A5A5A] border-r px-20 py-20 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[32px] text-center font-normal mb-6">
            Prototyping
            </h1>

            
            <div className="space-y-10">
                <div>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                    After aligning requirements with users and stakeholders, I moved the
                    tested wireframes into high-fidelity mockups and began working
                    closely with the development team. My focus shifted to refining
                    interactions, defining motion, and shaping a visual system that felt
                    clear and responsive.                  
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                    Using Figma, I built consistent components, applied the brand’s
                    typography, and created custom icons where needed. I introduced
                    smooth micro-interactions to keep the experience engaging without
                    impacting performance.                
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                    Speed was a key priority, so I collaborated with the team to ensure
                    users could search for events quickly and move through booking with
                    minimal friction.              
                    </p>
                </div>

            </div>
       </div>


       <div className="w-1/2   ">
          <img src={sketchImage} className=""/>
       </div>
    </div>

        </>
    )
}

export default FourthSection;