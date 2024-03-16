import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="Upskill for the More Opportunities " text="Here Are Some of Recommended Trending Courses 😊 "/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Project;