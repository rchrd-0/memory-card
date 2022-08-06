import React from 'react';

const Footer = () => {
  return (
    <footer id="page-footer">
      <div id="made-by">
        Made by
        <a
          className="accent"
          href="https://github.com/rchrd-0"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github icon" className="github" />
          RCHRD
        </a>
        for
        <a
          className="accent"
          href="https://www.theodinproject.com/"
          target="_blank"
          rel="noreferrer"
        >
          The Odin Project
        </a>
      </div>
    </footer>
  );
};

export default Footer;
