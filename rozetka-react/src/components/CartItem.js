import React from 'react';

function CartItem({ id, imgUrl, manufacturer, number, name, price, onPlus, onMinus, onRemove }) {
  function handlePlusCartItem() {
    
    onPlus(id);
  } //TODO
  function handleMinusCartItem() {
    onMinus(id);
    
  } //TODO
  function handleRemoveFromCart() {
    onRemove(id);
    
  }

  return (
    <div className="cart__item">
      <img src={imgUrl} className="cart__img" alt="sowwy no pic :("></img>
      <p>
        {manufacturer} {name}
      </p>
      <p className="cart__item_price">  {price} &#8372;</p>
      <button onClick={handleMinusCartItem} className="cart__buttons">
        -
      </button>
      <p>{number}</p>
      <button onClick={handlePlusCartItem} className="cart__buttons">
        +
      </button>
      <button onClick={handleRemoveFromCart} className="cart__buttons">
        &times;
      </button>
    </div>
  );
}

export default CartItem;
