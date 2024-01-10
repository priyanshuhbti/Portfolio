import "./HeroImg2Styles.css";

import React, { Component } from "react";
import aos from'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


class HeroImg2 extends Component {


  render() {
    return <div className="hero-img">
      <div className="heading">
        <h1 data-aos="fade-up">{this.props.heading}</h1>
        <p data-aos="fade-up">{this.props.text}</p>
      </div>
    </div>;
  }
}

export default HeroImg2;
