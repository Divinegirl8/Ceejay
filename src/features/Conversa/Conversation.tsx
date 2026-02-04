import diagramImage from "../../assets/new-portfolio/conversa/conversation/Group (6).png";

const Conversation:React.FC = () => {
    return(
        <>
            <div className="flex  flex-col xl:items-center xl:justify-center md:py-16 py-10 max-sm:px-7 px-10 xl:px-0 ">
                  
                  <h2 className="text-[#000000] text-[38px] max-sm:text-[20px] xl:text-center  font-medium leading-tight md:mt-5">
                  <span className="block">Conversation Architecture</span>
                  </h2>

                  <span className="text-[#626262] text-[18px] font-normal mt-3 text-center max-w-[45rem]">The heart of the system was designing dialogue flows that handle real-world complexity.
                    Each scenario required careful mapping of conversation paths, edge cases,and graceful error recovery.</span>
          </div>

          <div className="flex justify-center">
            <img src={diagramImage} className="w-[350px] h-[418px]"/>
          </div>


          <div className="flex justify-center">
                <h2 className="text-[#000000] text-[38px] max-sm:text-[20px] xl:text-center  font-medium leading-tight md:mt-5">
                  <span className="block">Handled Scenarios</span>
                  </h2>
          </div>
        </>
    )
}


export default Conversation;