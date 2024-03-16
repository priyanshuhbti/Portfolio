import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from "react";
import { FaBars ,FaTimes} from "react-icons/fa";

const Navbar = () => {
const[click , setClick]=useState(false);
const handleClick =() => setClick(!click);


  return <div className="header">
    <Link to="/">
      <h1>CarrerQuest</h1>
    </Link>
    <ul className={click ? "nav-menu active" :"nav-menu"}>   
      <li>
        <Link to="/">Discover</Link>
      </li>
      <li>
        <Link to="/project">Find Job </Link>
      </li>
      <li>
        <Link to="/about">Career Toolbox</Link>
      </li>
      <li>
      <Link to="/Contact">Insights</Link>
    </li>
    <li>
      <Link to="/Busy">Bussiness Registration</Link>
    </li>
    
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
      {
        click ? (<FaTimes  size={20} style={{color:"#fff"}}/>)  :(<FaBars  size={20} style={{color:"#fff"}}/>)

    }
      
    </div>
    
      
    
  </div>

};

export default Navbar;
