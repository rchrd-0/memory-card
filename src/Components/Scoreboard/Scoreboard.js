import React from 'react';

const Scoreboard = (props) => {
  const { currentScore, highScore, deckNum } = props;
  return (
    <div id="scoreboard">
      <h3 id="deck-num">Deck #{deckNum + 1}</h3>
      <h3 id="curr-score">Score: {currentScore}</h3>
      <h3 id="high-score">High score: {highScore}</h3>
    </div>
  );
};

export default Scoreboard;
