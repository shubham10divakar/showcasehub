import React from 'react';
import HeroSection from '../HeroSection';
import PMHighlight from './PMHighlight';
import ProjectCards from '../ProjectCards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <PMHighlight />
      <ProjectCards />
      <Footer />
    </>
  );
}

export default Home;
