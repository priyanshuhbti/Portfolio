import "./PricingCardStyles.css";
import { Link } from "react-router-dom";
import aos from'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PricingCard = () => {

  useEffect(()=>{
    aos.init({duration:2000});
  }, []);






  return <div className="pricing">
    <div className="card-container">
      <div className="card" data-aos="fade-up">
        <h3>--Skill 1--</h3>
        <span className="bar"></span>
        <p className="btc">HTML</p>
        <p>--Advance--</p>
        <Link to="/contact" className="btn1">Certifications</Link>


        
        
      </div>

      <div className="card" data-aos="fade-up">
        <h3>--Skill 2--</h3>
        <span className="bar"></span>
        <p className="btc">CSS</p>
        <p>--Intermediate--</p>
        <Link to="/contact" className="btn1">Certifications</Link>


        
        
      </div>

      <div className="card" data-aos="flip-right">
        <h3>--Skill 3--</h3>
        <span className="bar"></span>
        <p className="btc">JavaScript</p>
        <p>--Intermediate--</p>
        <Link to="/contact" className="btn1">Certifications</Link>


        
        
      </div>

      <div className="card" data-aos="zoom-in">
        <h3>--Skill 4--</h3>
        <span className="bar"></span>
        <p className="btc">React JS</p>
        <p>--Intermediate--</p>
        <Link to="/contact" className="btn1">Certifications</Link>


        
        
      </div>
      <div className="card" data-aos="fade-up">
        <h3>--Skill 5--</h3>
        <span className="bar"></span>
        <p className="btc">Node JS</p>
        <p>--Basic--</p>
        <Link to="/contact" className="btn1">Certifications</Link>


        
        
      </div>
      
      
      <div className="card" data-aos="fade-right">
        <h3>--Skill 6--</h3>
        <span className="bar"></span>
        <p className="btc">MongoDB</p>
        <p>--Basic--</p>
        <Link to="/contact" className="btn1">Certifications</Link>


        
        
      </div>

    </div>
  </div>;
};

export default PricingCard;
