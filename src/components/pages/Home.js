import React from 'react';
import HeroSection from '../HeroSection';
import PMHighlight from './PMHighlight';
import VisionShowcase from '../three/VisionShowcase';
import ProjectCards from '../ProjectCards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <PMHighlight />
      <VisionShowcase />
      <ProjectCards />
      <Footer />
    </>
  );
}

export default Home;
