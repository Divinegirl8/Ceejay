import painPointImg from "../../assets/new-portfolio/boss-cab/fourth-section/Pain points 1.png";

const FourthSection : React.FC = () => {
    return(
        <>
        
        <div className="border-t  border-[#5A5A5A] flex flex-row">
       
        <div className="w-1/2  border-[#5A5A5A] border-r px-20 py-20 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[32px] text-center font-normal mb-6">
            Understanding User Frustrations
            </h1>

 
            <div className="space-y-10">
                <div>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Through comprehensive user research and in-depth interviews with
                        both riders and drivers, three critical pain points emerged that were
                        significantly hindering Bosscab's growth and overall user satisfaction.
                        These challenges painted a clear picture of where the current
                        experience was falling short of Bosscab's mission to be the friendlier,
                        fairer rideshare option.                
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                        The issues ranged from pricing concerns that deterred potential users
                        from choosing Bosscab over public transportation or competitors, to
                        technical inefficiencies in the payment system that created confusion
                        and distrust, and navigation issues that resulted in longer trips and
                        frustrated customers. Each pain point had a cascading effect—high
                        costs meant fewer riders, slow payments eroded platform confidence,
                        and route discrepancies led to disputes and negative reviews.
                        Addressing these pain points became central to redesigning the
                        Bosscab experience and unlocking the growth needed before
                        going public.          
                    </p>

                    
                </div>

            </div>
       </div>
      


       <div className="w-1/2 flex justify-center items-center px-10 bg-[#171A23]  ">
          <img src={painPointImg} className=""/>
       </div>
    </div>

        </>
    )
}

export default FourthSection;