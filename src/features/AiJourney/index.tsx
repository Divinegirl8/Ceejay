import arrow from "../../assets/new-portfolio/aijourney/Arrow 1 (2).svg";
import lineIcon from "../../assets/new-portfolio/aijourney/Line.svg";

const AiJourney : React.FC = () => {
    return(
        <>
          <div id="ai" className="py-16 px-20  scroll-mt-[88px] bg-[#050A10]">

            <h3 className="text-[#FEFEFE] text-[70px] border-b-1 border-[#424144] py-8">AI Journey</h3>

            <div className="flex flex-row  justify-between py-10">
              <div className="flex flex-row gap-3">
                <h3 className="text-[#A6A6A6] font-[500] text-[50px] whitespace-nowrap">Generative Design</h3>
              <span className="text-[#FEFEFE] font-normal">01</span>
              <img src={lineIcon}/>
              </div>

              <span className="text-[#A6A6A6] max-w-[650px] text-[20px]">Explored AI image generation to create hyper-realistic game characters, cinematic scenes, and motion graphics, blending human imagination with machine precision.</span>
              <div className="flex items-center cursor-pointer"><img src={arrow}/></div>
            </div>

            <div className="flex flex-row  justify-between py-10 border-t-1 border-[#424144]">
              <div className="flex flex-row gap-3">
                <h3 className="text-[#A6A6A6] font-[500] text-[50px] whitespace-nowrap">AI in Product Design</h3>
              <span className="text-[#FEFEFE] font-normal">02</span>
              <img src={lineIcon}/>
              </div>

              <span className="text-[#A6A6A6] max-w-[650px] text-[20px]">Integrated AI workflows into design systems to improve usability testing, user research, and prototype generation, reducing iteration time while improving clarity and accessibility.</span>
              <div className="flex items-center cursor-pointer"><img src={arrow}/></div>
            </div>


            <div className="flex flex-row  justify-between py-10 border-t-1 border-[#424144]">
              <div className="flex flex-row gap-3">
                <h3 className="text-[#A6A6A6] font-[500] text-[50px] whitespace-nowrap">AI-Powered Motion Graphics</h3>
              <span className="text-[#FEFEFE] font-normal">03</span>
              <img src={lineIcon}/>
              </div>

              <span className="text-[#A6A6A6] max-w-[440px] text-[20px]">Developed animated sequences using Runway ML and Midjourney for brand storytelling, combining design, movement, and AI-driven visuals for dynamic media experiences.</span>
              <div className="flex items-center cursor-pointer"><img src={arrow}/></div>
            </div>


            <div className="flex flex-row  justify-between py-10 border-t-1 border-[#424144]">
              <div className="flex flex-row gap-3">
                <h3 className="text-[#A6A6A6] font-[500] text-[50px] whitespace-nowrap">Conversational Intelligence</h3>
              <span className="text-[#FEFEFE] font-normal">04</span>
              <img src={lineIcon}/>
              </div>

              <span className="text-[#A6A6A6] max-w-[450px] text-[20px]">Founded Conversa, an early-stage AI startup that allows businesses to make and receive calls autonomously using natural, human-like voice automation.</span>
              <div className="flex items-center cursor-pointer"><img src={arrow}/></div>
            </div>


            <div className="flex flex-row  justify-between py-10 border-t-1 border-[#424144]">
              <div className="flex flex-row gap-3">
                <h3 className="text-[#A6A6A6] font-[500] text-[50px] whitespace-nowrap">AI Mentorship</h3>
              <span className="text-[#FEFEFE] font-normal">05</span>
              <img src={lineIcon}/>
              </div>

              <span className="text-[#A6A6A6] max-w-[800px] text-[20px]">Taught designers and creators how to integrate AI into their workflow from creative exploration to automation strategy, helping them embrace AI as a collaborator rather than a replacement.</span>
              <div className="flex items-center cursor-pointer"><img src={arrow}/></div>
            </div>

          </div>
        </>
    )
}

export default AiJourney;