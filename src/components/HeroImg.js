import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { FaFacebook ,FaInstagram ,FaLinkedin } from "react-icons/fa";

import aos from'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const HeroImg = () => {
  useEffect(()=>{
    aos.init({duration:2000});
  }, []);





  return (<div className="hero">
    <div className="mask">
      <img className="into-img"
      src={IntroImg} alt="IntroImg" /></div>
        <div className="content">
          <p > HI, WE ARE CAREERQUEST</p>
          <h1 >Your Job Assistant</h1>
          <div className="me">
            <Link to="/project" className="btn" >Login</Link>
          
          
            <Link to="/Contact" className="btn-light" >Signup</Link>
          </div>
          <div className="links">
  <Link to="https://www.instagram.com/priyanshusgvm/" ><FaFacebook size={40} style={{ color:"#fff" , marginRight:'1rem' }} /></Link>
  <Link to="https://www.instagram.com/priyanshusgvm/" ><FaInstagram size={40} style={{ color:"#fff" , marginRight:'1rem' }} /></Link>
  <Link to="https://www.linkedin.com/in/priyanshu-yadav-7945111a6/" ><FaLinkedin size={40} style={{ color:"#fff" , marginRight:'1rem' }} /></Link>
  </div>
</div>

    </div>
  
  );
};


export default HeroImg;
