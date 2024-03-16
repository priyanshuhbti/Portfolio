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
    <h1 className="project-heading">Top Selling Courses</h1>
    <div className="project-container">
      <div className="project-card" data-aos="fade-up">
        <img src={pro1}alt="image" />
        <h2 className="project-title">Full Stack Course in Javascript</h2>
        <div className="pro-details">
          <p>JavaScript skills were mentioned in around 55% of all software development job postings in 2020, according to data from Burning Glass Technologies.</p>
          <div className="pro-btns">
            <NavLink to="https://face-ap.netlify.app/" className="btn1">Buy</NavLink>
            <NavLink to="https://face-ap.netlify.app/" className="btn1">Details</NavLink>

          </div>
        </div>
      </div>

      

      <div className="project-card" data-aos="fade-up">
        <img src={pro1}alt="image" />
        <h2 className="project-title">Cloud Computing (AWS, Azure, Google Cloud)</h2>
        <div className="pro-details">
          <p>Job postings requiring cloud computing skills, particularly in AWS, Azure, and Google Cloud Platform, have grown by over 50% annually, according to data from Indeed.</p>
          <div className="pro-btns">
            <NavLink to="https://face-ap.netlify.app/" className="btn1">Buy</NavLink>
            <NavLink to="https://face-ap.netlify.app/" className="btn1">Details</NavLink>

          </div>
        </div>
      </div>


      <div className="project-card" data-aos="fade-up">
        <img src={pro1}alt="image" />
        <h2 className="project-title">Machine Learning and Artificial Intelligence</h2>
        <div className="pro-details">
          <p>Job postings for roles requiring machine learning and AI skills have grown by 74% annually over the past four years, based on data from Burning Glass Technologies.</p>
          <div className="pro-btns">
            <NavLink to="https://face-ap.netlify.app/" className="btn1">Buy</NavLink>
            <NavLink to="https://face-ap.netlify.app/" className="btn1">Details</NavLink>

          </div>
        </div>
      </div>



      

      <div className="project-card" data-aos="fade-up">
        <img src={pro2}alt="image" />
        <h2 className="project-title">Data Analysis</h2>
        <div className="pro-details">
          <p>Data analysis skills were found to be mentioned in about 20% of all job postings across various industries in 2020, based on data from the U.S. Bureau of Labor Statistics.</p>
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
