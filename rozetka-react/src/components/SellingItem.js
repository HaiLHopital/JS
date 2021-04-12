import React from 'react';
import cartsvg from '../assets/img/addToCart.svg';
import { useDispatch } from 'react-redux';

import {addToCart} from '../redux/actions/cart';

function Item({ id, imgUrl, manufacturer, category, name, price, params }) {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(addToCart({ 
      id, 
      imgUrl, 
      manufacturer, 
      category, 
      name, 
      price, 
      params 
    }));
  };

  return (
    <div className="sellingItem">
      <div className="tile_picture">
        <img className="image" src={imgUrl} alt="no pic sorry"></img>
      </div>

      <h2>{manufacturer}</h2>
      <h3>{name}</h3>
      <h3>{price} &#8372;</h3>
      <button onClick={handleAddProduct} className="addCart">
        <img src={cartsvg} alt="cart"></img>
      </button>
      <h4 className="params">{params}</h4>
    </div>
  );
}

export default Item;
