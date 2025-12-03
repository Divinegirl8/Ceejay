import ProjectCard from "../../component/ProjectCard";

const Portfolio:React.FC = () =>{

    return(
        <>

        <div id="portfolio" className="py-3 pt-[5rem] scroll-mt-[90px] ">



            <div className="flex flex-col items-center justify-center">
                    <span className="text-[#626262] text-[18px] font-medium">PORTFOLIO</span>
                    <h2 className="text-[#000000] text-[50px] text-center font-medium leading-tight mt-5">
                    <span className="block">Innovation, Excellence, and</span>
                    <span className="block">Success Combined</span>
                    </h2>
            </div>


            <div className="mt-16">
            <ProjectCard
                title="CliqMit"
                description="Building an event discovery platform that turns user frustration into business opportunity. Cluttered interfaces and complex booking flows were causing abandonment and revenue loss. I designed CliqMit from scratch, focusing on simplicity and conversion to reduce friction, increase completion rates, and establish competitive market positioning."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc="src/assets/new-portfolio/portfolio/cliqmit.png"
                imageAlt="Cliq Mit app"
                imageOnLeft={true}
                />

                <ProjectCard
                title="Kobo Connect"
                description="I designed Kobo Vault as a financial technology combining instant virtual cards, real-time monitoring, seamless transfers, and smart budgeting in a secure, intuitive interface. The solution reduces cognitive load, builds trust through transparency, and positions Kobo Vault to capture underserved market segments seeking both simplicity and robust financial control."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc="src/assets/new-portfolio/portfolio/ks.png"
                imageAlt="Kobo Connect app"
                imageOnLeft={false}
                />
               <ProjectCard
                title="Bosscab Ride"
                description="A strategic redesign addressing user pain points and business growth. Through research uncovering affordability barriers, payment friction, and navigation issues, I designed group wallets, seamless transactions, and precise routing—solutions that reduce costs, improve retention, and drive sustainable growth."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc="src/assets/new-portfolio/portfolio/bc.png"
                imageAlt="Bosscab Ride app"
                imageOnLeft={true}
                />

                <ProjectCard
                title="Synventory"
                description="Lorem ipsum dolor sit amet, consectetur adipi elit. Quisque cursus leo in euismod imperdiet. Curabitur rhoncus sit amet lorem in feugiat. Phasellus consec tetur eget nibh a gravida. Proin pulvinar dolor a odio ultricies malesuada."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc="src/assets/new-portfolio/portfolio/bosscab.png"
                imageAlt="Synventory app"
                imageOnLeft={false}
                />

               
            </div>



       </div>
        
        
        </>
    )
}

export default Portfolio;