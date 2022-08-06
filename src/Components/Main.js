import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard/Scoreboard';
import Gameboard from './Gameboard/Gameboard';
import * as utils from './utils';

const Main = () => {
  const [cards, setCards] = useState(utils.cardData);
  const [pickedCards, setPickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [deckNum, setDeckNum] = useState(0);

  // Render deck in random order on mount && score change
  useEffect(() => {
    const shuffledDeck = utils.shuffle(cards);
    setCards(shuffledDeck);
  }, [currentScore]);

  // useEffect to update highScore vs. currentScore
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  // Increments deckNum on completing a full deck (12 cards)
  useEffect(() => {
    if (currentScore > 0 && currentScore % 12 === 0) {
      setDeckNum((prevState) => prevState + 1);
    }
  }, [currentScore]);

  const handleCardClick = (cardId) => {
    const fullId = cardId + deckNum;
    const pickedBefore = pickedCards.some((card) => card === fullId);
    if (!pickedBefore) {
      setPickedCards((prevState) => [...prevState, fullId]);
      setCurrentScore((prevState) => prevState + 1);
    } else {
      setPickedCards([]);
      setCurrentScore(0);
      setDeckNum(0);
    }
  };

  return (
    <main className="game">
      <div id="instructions">game instructions</div>
      {/* <div id="deck-level"></div> */}
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Gameboard cardData={cards} handleClick={handleCardClick} />
    </main>
  );
};

export default Main;
