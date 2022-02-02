import "./about.css";
import my from "../../img/yi.png"; 
const About = () => {
    return (
        <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={my} alt="" className="a-img"/>
            </div>
        </div>

        <div className="a-right">
            <h1 className="a-title">ABOUT ME</h1>
            <p className="a-sub">
                IM A COMPUTER SCIENCE STUDENT AT THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY PATIALA.
                SINCE CHILDHOOD SCIENCE AND TECHNOLOGY FASCINATED ME A LOT.
                THREE THINGS I ABSOLUTELY LOVE DOING ARE:
                <li>
                    CRICKET
                </li>
                <li>
                    DATA STRUCTURES AND ALGORITHMS
                </li>
                <li>
                    PHYSICS 
                </li>
                
                <div>HERE ARE SOME OF MY USER PROFILES:
                  <div>  <a href="https://leetcode.com/gamaraina/">LEETCODE</a></div>
                  <div>  <a href="https://www.linkedin.com/in/arsh-raina-727106197/">LINKEDIN</a></div>

                </div>
                
                
            </p>
        </div>

        </div>
    )
}

export default About
