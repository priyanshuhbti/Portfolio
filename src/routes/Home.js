import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';


const Home = () => {
  return (
    <div>

      <Navbar />
      <HeroImg />
      <Chatbot />
      <Footer />
    </div>
  )
}

export default Home