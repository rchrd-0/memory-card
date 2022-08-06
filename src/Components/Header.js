import React from 'react';

const Header = ({ children }) => {
  return (
    <header id="page-header">
      <h1>Memory Card</h1>
      {children}
    </header>
  );
};

export default Header;
