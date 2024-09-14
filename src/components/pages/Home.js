import React, { useEffect } from 'react';
//import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Projects from '../ProjectCards';
import HeroSectionNew from '../HeroSectionNew.js';
import Modal from './Modal';
import { useState } from 'react';
import DinoGamePlayer from './DinoGame.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);   // Round up the minimum value
  max = Math.floor(max);  // Round down the maximum value
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Home() {
  // Set the initial state to true to show the modal by default
  const [isModalOpen, setIsModalOpen] = useState(true);

  //state to store the random integer to avoid regenerating it and casuing rerender
  const [randomInt, setRandomInt] = useState(null);

  const closeModal = () => setIsModalOpen(false);

  //const randomInt = getRandomInt(1, 100); // Generates a random integer between 1 and 100 (inclusive)
  //console.log(randomInt); // Output a random integer between 1 and
  
  useEffect(()=>{
    const randomValue = getRandomInt(1,100);
    setRandomInt(randomValue);
  },[]); // Empty dependency array ensures it runs only on the initial render
  
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
        <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DinoGamePlayer />
      </Modal>
    </div>
        <Projects />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <HeroSectionNew />
        <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DinoGamePlayer />
      </Modal>
    </div>
        <Projects />
        <Footer />
      </>
    );
  }
  
}

export default Home;
