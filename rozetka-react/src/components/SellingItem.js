import React from 'react';
import cartsvg from '../assets/img/addToCart.svg';

function Item({ id, imgUrl, category, name, price, params }) {
  return (
    <div className="sellingItem">
      <div className="tile_picture">
        <img className="image" src={imgUrl} alt="no pic sorry"></img>
      </div>

      <h2>{category}</h2>
      <h3>{name}</h3>
      <h3>{price} &#8372;</h3>
      <div className="addCart">
        <img src={cartsvg} alt="cart"></img>
      </div>
      <h4 className="params">{params}</h4>
    </div>
  );
}

export default Item;
