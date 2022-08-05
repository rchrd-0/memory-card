import React from 'react';

const Cards = (props) => {
  const { name, img } = props;
  return (
    <div className="card" data-img={img}>
      <img alt="" />
      {name}
    </div>
  );
};

export default Cards;
