// src/components/GamesPage.js
import React, { useState } from 'react';
import './GamesPage.css';
import DinoGamePlayer from './DinoGame';
import Modal from './Modal';

const games = [
  {
    title: 'Mario Game',
    description: 'A classic Mario game with exciting levels.',
    id: 'mario', // Unique identifier for each game
  },
  {
    title: 'Dino Game',
    description: 'An endless runner game with a dinosaur character.',
    id: 'dino', // Unique identifier for each game
  },
  {
    title: 'Temple Run',
    description: 'An endless temple runner game.',
    id: 'templerun', // Unique identifier for each game
  },
  // Add more games here
];

const GamesPage = () => {
  const [modalGameId, setModalGameId] = useState(null);

  const openModal = (gameId) => {
    setModalGameId(gameId);
  };

  const closeModal = () => {
    setModalGameId(null);
  };

  const renderModalContent = () => {
    if (modalGameId === 'dino') {
      return <DinoGamePlayer />;
    } else if (modalGameId === 'mario') {
      return <> Game Is In development </>;
    } else {
        return <>Game Is In Development</>;
    }
    // You can add more conditions for other games here
    return null;
  };

  return (
    <div className="games-page">
      <h1>My Games</h1>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <button onClick={() => openModal(game.id)} className="play-button">Play Now</button>
          </div>
        ))}
      </div>
      <Modal isOpen={modalGameId !== null} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default GamesPage;
