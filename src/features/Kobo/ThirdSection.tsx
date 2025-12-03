import ideateImage from "../../assets/new-portfolio/kobo/third-section/Group.png"

const ThirdSection : React.FC = () => {
    return(
        <>
        
        <div className="border-t border-[#5A5A5A] flex flex-row">
       

           <div className="w-1/2  border-[#5A5A5A] border-r px-20 py-16 bg-[#FBFBFB]">
                <h1 className="text-[#000000] text-[32px] text-center font-normal mb-6">
                    Design process
                </h1>
                
                <div className="space-y-10">
                    <div>
                        <h2 className="text-[#000000] text-[16px] font-medium mb-2">
                        User Research
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Through interviews and testing with 40+ users across Nigeria, Kenya,
                        and Ghana, I identified critical pain points: users feared security
                        breaches when managing money online, found existing apps cluttered
                        with confusing features, and struggled to track spending across
                        multiple platforms. Most users abandoned fintech apps within 2 weeks
                        due to trust issues or overwhelming interfaces. The research revealed
                        users wanted security visibility, instant feedback on transactions, and
                        a clean interface that didn't require financial expertise.                        
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[#000000] text-[16px] font-medium mb-2">
                        Security-First Design
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">

                        Users need to feel safe before they engage. I prioritized visible
                        security cues throughout the experience—biometric authentication,
                        transaction notifications, card freeze options, and transparent privacy
                        controls. Every interaction reinforces trust: immediate payment
                        confirmations, clear authorization requests, and one-tap security
                        toggles that put users in control.                       
                         </p>
                    </div>
                </div>
           </div>


           <div className="w-1/2  justify-center items-center flex px-10 bg-[#F2F2F2]">
              <img src={ideateImage} className=""/>
           </div>
        </div>
        
        </>
    )
}

export default ThirdSection;