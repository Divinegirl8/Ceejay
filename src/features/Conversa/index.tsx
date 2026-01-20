import FirstSection from "./FirstSection";

const Conversa  : React.FC = () => {
    return (
        <>

           <div className="flex  flex-col xl:items-center xl:justify-center md:py-16 py-10 max-sm:px-7 px-10 xl:px-0 ">
                  
                  <h2 className="text-[#000000] text-[50px] max-sm:text-[30px] xl:text-center  font-medium leading-tight md:mt-5">
                  <span className="block">CONVERSA - AI Voice Agents for Healthcare</span>
                  </h2>

                  <span className="text-[#626262] text-[18px] font-normal mt-3">Building AI voice agents that handle real phone conversations for hospitals and clinics.</span>
          </div>

          <FirstSection/>
        </>
    )
}

export default Conversa;