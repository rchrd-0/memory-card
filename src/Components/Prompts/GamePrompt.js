import React from 'react';

const GamePrompt = ({ children, endScore, gameState, deckNum }) => {
  return (
    <div className="game-prompt">
      <div className="prompt-content">
        {gameState === 1 ? (
          <h2>Game over!</h2>
        ) : (
          <h2>
            Congratulations! You&apos;ve completed the deck ... shuffling deck #
            {deckNum + 1}
          </h2>
        )}
        {gameState === 1 ? (
          <h3 className="prompt-score">Score: {endScore}</h3>
        ) : (
          <h3 className="prompt-score">Current score: {endScore}</h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default GamePrompt;
