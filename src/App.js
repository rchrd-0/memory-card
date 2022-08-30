import React from 'react';
import './sass/main.scss';

import Main from './Components/Main';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app">
      <Main />
      <Footer />
    </div>
  );
};

export default App;
