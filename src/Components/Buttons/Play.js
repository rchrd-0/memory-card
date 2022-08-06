import React from 'react';

const Play = (props) => {
  const { continueGame } = props;
  return <button onClick={continueGame}>Play</button>;
};

export default Play;
