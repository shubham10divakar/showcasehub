import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Projects from '../ProjectCards';
import HeroSectionNew from '../HeroSectionNew.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);   // Round up the minimum value
  max = Math.floor(max);  // Round down the maximum value
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Home() {
  //Example condition (replace with your actual condition)

  const randomInt = getRandomInt(1, 100); // Generates a random integer between 1 and 100 (inclusive)
  //console.log(randomInt); // Output a random integer between 1 and 
  
  var shouldShowHero = true; // Replace with your condition here


  if(randomInt%2==0){
    shouldShowHero = false;
  }

  //shouldShowHero = false;

  //Conditional rendering with if-else
  if (shouldShowHero) {
    return (
      <>
        <HeroSection />
        <Projects />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <HeroSectionNew />
        <Projects />
        <Footer />
      </>
    );
  }
  
}

export default Home;
