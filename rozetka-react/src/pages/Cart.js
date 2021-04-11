import React from 'react';
import { Header } from '../components';

import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  //maybe it's better to store cartitems in different way, without aadding every item as unic entrance

  const unicProducts = Object.keys(items).map((key) => items[key][0]);
  
  return (
    <div>
      <Header />
      <h1>Its a cart</h1>
      <div className="cartcontent">
        {unicProducts.map((obj) => (
          <CartItem
            key={obj.id}
            id={obj.id}
            imgUrl={obj.imgUrl}
            manufacturer={obj.manufacturer}
            category={obj.category}
            name={obj.name}
            price={obj.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
