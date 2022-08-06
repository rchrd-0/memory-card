import React from 'react';

const Cards = (props) => {
  const { id, name, img, handleClick } = props;
  return (
    <div className="card" data-img={img} onClick={() => handleClick(id)}>
      <img alt="" />
      <h3 className="film-name">{name}</h3>
    </div>
  );
};

export default Cards;
