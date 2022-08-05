import React from 'react';
import Cards from './Cards';

const Gameboard = (props) => {
  const { cardData, handleClick } = props;
  return (
    <div id="gameboard">
      {cardData.map((card) => (
        <Cards
          key={card.id}
          id={card.id}
          name={card.name}
          img={card.img}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Gameboard;
