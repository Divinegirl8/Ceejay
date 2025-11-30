import Footer from "../../component/Footer";
import Form from "../../component/Form";
import Hero from "../../component/Hero";
import NavBar from "../../component/NavBar";
import Testimonial from "../../component/Testimonial";
import AiJourney from "../AiJourney";
import Portfolio from "../Portfolio";
import Teaching from "../Teaching";


const Home:React.FC = ()=>{
    return(
        <>


            <div className="">
                <Hero/>
                <div className="sticky top-0 z-50">
                    <NavBar/>
                </div>
                <Portfolio/>
                <AiJourney/>
                <Teaching/>
                <Testimonial/>
                <Form/>
                <Footer/>
            </div>
  
        
        
        </>
    )
}

export default Home;