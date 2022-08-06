import React from 'react';

const GamePrompt = ({ children, endScore, gameState, deckNum }) => {
  return (
    <div className="game-prompt">
      {gameState === 1 ? (
        <h2>Game over!</h2>
      ) : (
        <h2>
          Congratulations! You&apos;ve completed the deck ... shuffling deck #
          {deckNum + 1}
        </h2>
      )}
      {gameState === 1 ? (
        <h3>Score: {endScore}</h3>
      ) : (
        <h3>Current score: {endScore}</h3>
      )}
      {children}
    </div>
  );
};

export default GamePrompt;
