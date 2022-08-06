import React from 'react';

const GamePrompt = ({ children, endScore }) => {
  return (
    <div className="game-prompt">
      <h2>Game over!</h2>
      <h3>Your score was: {endScore}</h3>
      {children}
    </div>
  );
};

export default GamePrompt;
