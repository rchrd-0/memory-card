import React from 'react';

const Scoreboard = (props) => {
  const { currentScore, highScore } = props;
  return (
    <div id="scoreboard">
      <h3>Score: {currentScore}</h3>
      <h3>High score: {highScore}</h3>
    </div>
  );
};

export default Scoreboard;
