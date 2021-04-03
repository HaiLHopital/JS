import React from 'react';

import logosvg from '../assets/img/logo_n.svg';
import cart from '../assets/img/cart.svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={logosvg} alt="logo"></img>
          <h1>ROZETKA</h1>
        </div>
        <div className="cart">
          <img src={cart} alt="cart"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
