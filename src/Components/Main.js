import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard/Scoreboard';
import Gameboard from './Gameboard/Gameboard';
import * as utils from './utils';

const Main = () => {
  const [cards, setCards] = useState(utils.cardData);
  const [pickedCards, setPickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  // const [highScore, setHighScore] = useState(0);

  // Render deck in random order on mount
  useEffect(() => {
    const shuffledDeck = utils.shuffle(cards);
    setCards(shuffledDeck);
  }, [currentScore]);

  const handleCardClick = (id) => {
    const pickedBefore = pickedCards.some((card) => card === id);
    if (!pickedBefore) {
      setPickedCards((prevState) => [...prevState, id]);
      setCurrentScore((prevState) => prevState + 1);
    } else {
      setPickedCards([]);
      setCurrentScore(0);
    }
  };

  return (
    <main className="game">
      <div id="instructions">game instructions</div>
      <Scoreboard currentScore={currentScore} />
      <Gameboard cardData={cards} handleClick={handleCardClick} />
    </main>
  );
};

export default Main;
