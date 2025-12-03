import manImage from "../../assets/new-portfolio/kobo/second-section/1.png"

const SecondSection : React.FC = () => {
    return(
        <>
        
        <div className="border-t border-b border-[#5A5A5A] flex flex-row">
           <div className="w-1/2 border-r border-[#5A5A5A]">
              <img src={manImage} className="w-full h-full object-cover"/>
           </div>

           <div className="w-1/2 px-20 py-16">
                <h1 className="text-[#000000] text-[32px] text-center font-normal mb-6">
                    Challenge
                </h1>
                
                <div className="space-y-10">
                    <div>
                        <h2 className="text-[#000000] text-[16px] font-medium mb-2">
                            Problem
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                            Many Africans struggle with fragmented financial services—juggling multiple apps for payments, savings, and cards. Traditional banking feels complex and inaccessible, while existing fintech solutions lack the security and comprehensive features users need to confidently manage their finances in one place.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[#000000] text-[16px] font-medium mb-2">
                            Solution
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                            Create Kobo Vault as a unified financial hub that combines security with simplicity. Deliver instant virtual cards, real-time transaction monitoring, seamless peer-to-peer transfers, and smart budgeting tools—empowering users to take control of their financial lives without complexity or compromise.
                        </p>
                    </div>
                </div>
           </div>
        </div>
        
        </>
    )
}

export default SecondSection;