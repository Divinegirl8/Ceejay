// import circle from "../../assets/heropage/Group.png";
import blueBtn from "../../assets/heropage/blu-btn-arr.png";

const HeroPage = () => {
    return(
        <div className="pt-30 text-white flex flex-row">

              <div>
                <p className="text-[#62646C]">CUTTING-EDGE AI ART CREATIONS BY</p>
                <h3>LUCKY EKEZIE</h3>
              </div>

            

              <div>
                <div>
                    <h3>LET'S</h3>
                    <div><img src={blueBtn} className="w-[6rem] h-[4rem]"/></div>
                </div>
                <h3>WORK TOGETHER</h3>
              </div>

        </div>
    )
}

export default HeroPage;