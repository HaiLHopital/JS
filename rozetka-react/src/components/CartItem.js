import React from 'react';

function CartItem({ id, imgUrl, manufacturer, category, name, price, onPlus, onMinus, onRemove }) {
  function handlePlusCartItem() {
    console.log('+1');
    onPlus(id);
  } //TODO
  function handleMinusCartItem() {
    onMinus(id)
    console.log('-1');
  } //TODO
  function handleRemoveFromCart() {
    onRemove(id)
    console.log('--1');
  }

  return (
    <div className="cart__item">
      <h1>
        {manufacturer} {name}
      </h1>
      <h2>{price} &#8372;</h2>
      <button onClick={handlePlusCartItem}>+</button>
      <button onClick={handleMinusCartItem}>-</button>
      <button onClick={handleRemoveFromCart}>--</button>
    </div>
  );
}

export default CartItem;
