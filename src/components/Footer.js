import "./FooterStyles.css";

import React from "react";
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk,FaPhone , FaFacebook} from "react-icons/fa";

import aos from'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Footer = () => {


  useEffect(()=>{
    aos.init({duration:2000});
  }, []);



  return <div className="Footer">

    <div className="footer-container">
<div className="left">
  <div className="location">
    <FaHome size={20} style={{ color:"#fff" , marginRight:'2rem' }} />
  
  <div data-aos="fade-up">
<p>WCH-4 Housing Society</p>
<p>LaptaGanj</p>
</div>


</div>
  <div data-aos="fade-up" className="phone">
  <h4><FaPhone size={20} style={{ color:"#fff" , marginRight:'2rem' }} />
+91 88-34-43-XXXX
</h4>

  </div>
  <div className="email" data-aos="fade-up">
    <h4><FaMailBulk size={20} style={{ color:"#fff" , marginRight:'2rem' }} />
    mr-bean@gmail.com</h4>
  </div>
</div>





<div className="right">
  <h4 data-aos="fade-up"> About Me</h4>
  <p data-aos="fade-up">I am Priyanshu Yadav , a frontend developer with a passion for creating beautiful and intuitive user experiences. I specialize in building responsive and interactive using HTML, CSS, and JavaScript and ReactJS .</p>
  <div className="social">
  <FaFacebook size={30} style={{ color:"#fff" , marginRight:'1rem' }}  data-aos="fade-up"/>
  <FaInstagram size={30} style={{ color:"#fff" , marginRight:'1rem' }}  data-aos="fade-up"/>
  <FaLinkedin size={30} style={{ color:"#fff" , marginRight:'1rem' }} data-aos="fade-up" />
  </div>
</div>
</div>
  </div>
};

export default Footer;
