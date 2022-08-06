import React from 'react';

const Cards = (props) => {
  const { id, name, img, handleClick } = props;
  return (
    <div className="card" data-img={img} onClick={() => handleClick(id)}>
      <img alt="" />
      {name}
    </div>
  );
};

export default Cards;
