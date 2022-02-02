import "./intro.css";
import me from "../../img/me.png"; 
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello My name is</h2>
                    <h2 className="i-name">ARSH RAINA</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">PROBLEM SOLVER</div>
                            <div className="i-title-item">WEB DEVELOPER</div>
                            <div className="i-title-item">CRICKETER</div>
                            <div className="i-title-item">BUSINESS ENTHUSIAST</div>
                            <div className="i-title-item">MACHINE LEARNING ENTHUSIAST</div>
                            </div>

                            </div>
                            <p className="i-desc">
               <div>I code , design ,develop. My prime instrests lie in the field of coding different solutions and entrepreneurship.</div>
               <div>MY SKILLS INCLUDE:
                   <li>DATA STRUCTURES AND ALGORITHM</li>
                   <li>C++</li>
                   <li>OBJECT ORIENTED PROGRAMMING</li>
                   <li>JAVA SCRIPT</li>
                   <li>NODE JS</li>
                   <li>DBMS</li>
                   <li>MYSQL</li>
                   <li>PYTHON</li>

                   
                    </div>
                
                </p>
            </div>
            
            </div>
   

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img"/>
            </div>
           
        </div>
    )
}

export default Intro
