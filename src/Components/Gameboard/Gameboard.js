import React from 'react';
import Cards from './Cards';

const Gameboard = (props) => {
  const { cardData } = props;
  return (
    <div id="gameboard">
      {cardData.map((card) => (
        <Cards key={card.id} name={card.name} img={card.img} />
      ))}
    </div>
  );
};

export default Gameboard;
