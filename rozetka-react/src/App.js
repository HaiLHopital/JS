import Header from './components/Header';
import Components from './components/Categories';
import MainBlock from './components/MainBlock';

import React from 'react';

import './scss/App.scss';


function App() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Components />
        <MainBlock />
      </div>
    </div>
  );
}

export default App;
