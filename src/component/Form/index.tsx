const Form:React.FC = () =>{
    return(
        <div id="contact" className="py-16 px-20  scroll-mt-[80px] max-md:scroll-mt-[10px] bg-[#050A10]">
        <div className=" items-center justify-center flex py-18 flex-col px-4">

            <div className="text-center max-w-4xl w-full">
                <h2 className="text-[#FEFEFE] text-[65px]">SAY HELLO!</h2>
                <span className="text-[#FEFEFE] text-[25px]">Ask me something, or just send me a message here:</span>
            </div>


            <div className="mt-10 max-w-[37rem] w-full">
                <form>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[#FEFEFE]">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="bg-[#191E24] rounded px-5 py-[14px] w-full text-[#ADADAD] font-[400] text-[16px] outline-0"
                        />
                    </div>

                    <div className="flex flex-col gap-2 mt-5">
                        <label htmlFor="email" className="text-[#FEFEFE]">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Enter your name"
                            className="bg-[#191E24] rounded px-5 py-[14px] w-full text-[#ADADAD] font-[400] text-[16px] outline-0"
                        />
                    </div>

                    <div className="flex flex-col gap-2 mt-5">
                       <label htmlFor="message" className="text-[#FEFEFE]">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            placeholder="Enter your message here"
                            rows={5}
                            className="bg-[#191E24] rounded px-5 py-[14px] w-full text-[#ADADAD] font-[400] text-[16px] outline-0"
                        />
                     </div>

                     <button 
                        type="submit"
                        className="bg-[#238EFF] text-white text-[18px] font-semibold py-3 px-6 rounded-sm w-full hover:bg-[#2A8EEF] transition-colors mt-5"
                        >
                        Send
                        </button>
                </form>
            </div>

        </div>
        </div>
    )
}

export default Form;