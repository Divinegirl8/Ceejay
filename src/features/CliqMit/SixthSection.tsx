import sketchImage from "../../assets/new-portfolio/cliqmit/sixth-section/Mask group (4).png";

const SixthSection : React.FC = () => {
    return(
        <>
        
        <div className="border-t  border-[#5A5A5A] flex flex-row">
       
        <div className="w-1/2  border-[#5A5A5A] border-r px-20 py-20 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[32px] text-center font-normal mb-6">
            Design System
            </h1>

 
            <div className="space-y-10">
                <div>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        With the core visuals and interactions taking shape, I built a scalable
                        design system to unify the entire Cliqmit experience across mobile and
                        web. The goal was to create a consistent, flexible foundation that could
                        support event discovery, ticketing, user accounts, and future features
                        without redesigning elements from scratch.                 
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                        I defined the color palette, typography styles, spacing rules, grids, and
                        component structures that shape the UI. Buttons, cards, inputs,
                        navigation patterns, and states were standardized to ensure clarity
                        and predictability in every interaction. This system not only streamlined
                        collaboration with developers but also ensured that new screens could
                        be created quickly while maintaining a cohesive look and feel.               
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                        Building this design system early allowed Cliqmit to scale confidently,
                        giving the product a clear visual identity and a solid framework for
                        ongoing growth.            
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

export default SixthSection;