import paperImage from "../../assets/new-portfolio/cliqmit/third-section/image 182.png";
import stickyNoteImage from "../../assets/new-portfolio/cliqmit/third-section/3 (1).png";


const ThirdSection : React.FC = () => {
     return(
        <>
        <div className="flex border-t  border-[#5A5A5A] flex-row justify-between">

         
      
            <div className="flex-1 border-r border-[#5A5A5A] ">
                <img src={paperImage} className=""/>    
            </div>


            <div className="px-10 py-16 flex-1 bg-[#FBFBFB] border-r  border-[#5A5A5A]">
                <h2 className="text-[#000000] text-[32px] text-center font-normal mb-6">
                     Testing
                </h2>



                
                <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                    <p>  
                            I tested the first Cliqmit wireframes with event
                            organizers and attendees to confirm whether
                            the booking flow and navigation felt clear.
                            These sessions revealed that several early
                            assumptions didn’t match real user behavior,
                            leading to unnecessary friction in how people
                            discovered and booked events.
                    </p>

                    <p>  
                    By validating each flow with users, I uncovered
                    simpler, more natural paths that improved
                    clarity and reduced effort. This helped guide
                    stakeholders toward a direction that would
                    create a smoother, more productive experience
                    for everyone using Cliqmit.
                    </p>
                </div>
            </div>

            <div className="flex-1 ">
                <img src={stickyNoteImage} className=""/>    
            </div>

        </div>
        </>
     )
}

export default ThirdSection;