import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard/Scoreboard';
import Gameboard from './Gameboard/Gameboard';
import * as utils from './utils';

const Main = () => {
  const [cards, setCards] = useState(utils.cardData);
  // const [pickedCards, setPickedCards] = useState([]);
  // const [currentScore, setCurrentScore] = useState(0);
  // const [highScore, setHighScore] = useState(0);
  return (
    <main className="game">
      <div id="instructions">game instructions</div>
      <Scoreboard />
      <Gameboard cardData={cards} />
    </main>
  );
};

export default Main;
