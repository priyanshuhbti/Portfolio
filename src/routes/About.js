import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import PricingCard from '../components/PricingCard'

const About = () => {
  return (
    <div> 
      <Navbar />
      <HeroImg2  heading="Find Jobs..That we Recommend You." text="Here Are Some of Recommended Jobs For You 😊 "/>
      <PricingCard />
      <Footer />



    </div>
  )
}

export default About