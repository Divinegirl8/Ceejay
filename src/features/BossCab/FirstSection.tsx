import roadPicture from "../../assets/new-portfolio/boss-cab/first-section/roadgi.gif";
import maskPicture from "../../assets/new-portfolio/boss-cab/first-section/Group (4).png";

const FirstSection: React.FC = () => {
    return (
       <div>

<div className="border-t border-[#5A5A5A] flex flex-row justify-between bg-[#F5F5F5]">
       
       <div className="flex-1 border-r border-[#5A5A5A] flex px-20 items-center  py-20">
           <h1 className="text-[#000000] text-[50px] font-normal leading-tight">
               <span className="block">Ride Like a Boss,</span>
               <span className="block">Pay Like A Pro</span>
           </h1>
       </div>
     
       <div className="flex-1  flex items-center justify-center  py-20 px-20">
           <img 
               src={roadPicture} 
               alt="City skyline illustration"
               className="h-[200px] object-contain"
           />
       </div>

    
       <div className="flex items-center justify-center px-[21.5px]">
           <div 
               className="text-[#000000] text-[14px]  font-normal"
               style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
           >
               Date <span className="font-semibold">01.01.2022</span>
           </div>
       </div>
   </div>


   <div className="border-t border-[#5A5A5A] flex flex-row justify-between bg-[#F5F5F5]">
       
       <div className="flex-1 border-r border-[#5A5A5A] flex px-20 items-center  py-22">
           <img src={maskPicture}/>
       </div>
     
       <div className="flex-1 px-20 py-22 flex flex-col justify-center pt-20">
                        <h2 className="text-[#000000] text-[40px] font-normal mb-8 text-center">
                            Project Brief
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[17px] leading-relaxed">
                            Bosscab is a ride-hailing app connecting private drivers and riders
                            across multiple locations. As the company prepared to scale, it aimed
                            to attract more users by offering a friendlier, fairer alternative in the
                            rideshare space. The project focused on improving the app's
                            information architecture and enhancing key rider experiences—
                            payments, wallet transfers, and ride security. I redesigned Bosscab
                            with these goals in mind to support growth and encourage more
                            people to ride or drive with confidence.
                        </p>
                    </div>

    
       <div className="flex items-stretch gap-10 justify-center flex-col px-5">
           <div 
               className="text-[#000000] text-[16px]   font-normal"
               style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
           >
                    <span className="font-semibold">Bosscab</span> Case Study

           </div>

           <div 
               className="text-[#000000] text-[14px] uppercase font-semibold mt-30"
             
           >

            03
              
           </div>

          
       </div>


      
   </div>
       </div>
    );
};

export default FirstSection;