import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="PROJECTS." text="Here Are Some of My Recent Works 😊 "/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Project;