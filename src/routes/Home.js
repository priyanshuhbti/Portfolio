import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import PricingCard from '../components/PricingCard';
import Feed from '../components/Feed';


const Home = () => {
  return (
    <div>

      <Navbar />
      <HeroImg />
      <Feed />
      <Chatbot />
      <Footer />
    </div>
  )
}

export default Home