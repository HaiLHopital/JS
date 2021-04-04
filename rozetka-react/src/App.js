import Header from './components/Header';
import Categories from './components/Categories';
import MainBlock from './components/MainBlock';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';

import React from 'react';

import './scss/App.scss';

function App() {
  return (
    <Router>
      {/* <div>
        <Header />
        <div className="mainContainer">
          <Categories />
          <MainBlock />
        </div>
      </div> */}

      <Switch>
        <Route  exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
