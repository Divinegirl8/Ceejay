import sketchImage from "../../assets/new-portfolio/cliqmit/seventh-section/1 (3).png";

const SeventhSection : React.FC = () => {
    return(
        <>
        
        <div className="border-t border-b border-[#5A5A5A] flex flex-row">
       
        <div className="w-1/2   ">
          <img src={sketchImage} className=""/>
       </div>

       <div className="w-1/2  border-[#5A5A5A] border-r px-20 py-20 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[32px] text-center font-normal mb-6">
                 Final Product
            </h1>

 
            <div className="space-y-10">
                <div>
                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        The Cliqmit event platform was delivered in record time through the
                        combined effort of multiple teams working both onsite and remotely.
                        Built with a strong focus on reliability, speed, and simplicity, the final
                        product fully supports end-to-end event management across web,
                        mobile, and all major devices.               
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                        Today, Cliqmit empowers organizers and attendees globally with a
                        seamless experience. Event teams can instantly create events,
                        manage registrations, track attendance, send updates, and handle
                        payments with ease. Attendees can discover events, register in
                        seconds, access their digital tickets, and receive real-time
                        notifications—all through one unified platform.               
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                        Cliqmit brings everything together into a single intuitive system,
                        making event creation, participation, and management smoother and
                        faster than ever before.          
                    </p>
                </div>

            </div>
       </div>


    
    </div>

        </>
    )
}

export default SeventhSection;