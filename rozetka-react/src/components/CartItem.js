import React from 'react';

function CartItem({id, imgUrl, manufacturer, category, name, price}) {
  function handleAddToCart(){};               //TODO
  function handleRemoveFromCart(){};          //TODO


  return <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
  </div>;
}

export default CartItem