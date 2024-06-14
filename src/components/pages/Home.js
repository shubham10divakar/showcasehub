import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Projects from '../ProjectCards';

function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
