import "./WorkCardStyles.css";
import pro1 from "../assets/project1.png"
import{NavLink} from "react-router-dom";
import pro2 from "../assets/Fest.webp";
import aos from'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const WorkCard = (props) => {

  useEffect(()=>{
    aos.init({duration:2000});
  }, []);




  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      <div className="project-card" data-aos="fade-up">
        <img src={pro1}alt="image" />
        <h2 className="project-title">Face Recognistion WebApp</h2>
        <div className="pro-details">
          <p>This is a WebApp which can detect the Correct Age and Gender .  This WebApp is based on API and React JS Framework.</p>
          <div className="pro-btns">
            <NavLink to="https://face-ap.netlify.app/" className="btn1">View</NavLink>
            <NavLink to="https://face-ap.netlify.app/" className="btn1">Source</NavLink>

          </div>
        </div>
      </div>

      <div className="project-card" data-aos="fade-up">
        <img src={pro2}alt="image" />
        <h2 className="project-title">College Fest Website</h2>
        <div className="pro-details">
          <p>It is a College Fest Website named "Adhyaay" . Which i have designed with the help of HTML , CSS , JavaScript . HTML , CSS , Javascript are the basic toolkits to make a Responsive and Good FrontEnd Website .</p>
          <div className="pro-btns">
            <NavLink to="https://dapper-biscuit-2879aa.netlify.app/" className="btn1">View</NavLink>
            <NavLink to="https://dapper-biscuit-2879aa.netlify.app/" className="btn1">Source</NavLink>

          </div>
        </div>
      </div>
    </div>
   




    </div>

  )
};


export default WorkCard;
