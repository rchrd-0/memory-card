import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard/Scoreboard';
import Gameboard from './Gameboard/Gameboard';
import Cards from './Cards/Cards';
import getCardData from './helpers/cardData';
import shuffle from './helpers/shuffle';

const Main = () => {
  const [cards, setCards] = useState(getCardData());
  const [pickedCards, setPickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [deckNum, setDeckNum] = useState(0);
  const [gameState, setGameState] = useState(0);

  // Render deck in random order on mount && score change
  useEffect(() => {
    const shuffledDeck = shuffle(cards);
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
      <div id="deck-level">Deck #{deckNum + 1}</div>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Gameboard>
        {cards.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            name={card.name}
            img={card.img}
            handleClick={handleCardClick}
          />
        ))}
      </Gameboard>
    </main>
  );
};

export default Main;
