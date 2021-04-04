import React from 'react';
import { Link } from 'react-router-dom';

import logosvg from '../assets/img/logo_n.svg';
import cart from '../assets/img/cart.svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={logosvg} alt="logo"></img>
            <h1>ROZETKA</h1>
          </div>
        </Link>

        <div className="cart">
          <Link to="/cart">
            <img src={cart} alt="cart"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
