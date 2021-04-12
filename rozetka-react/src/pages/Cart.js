import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import { Header } from '../components';
import {plusCartItem, minusCartItem, removeCartItem, clearCart} from '../redux/actions/cart'

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  //maybe it's better to store cartitems in different way, without adding every item as unic entrance

  const unicProducts = Object.keys(items).map((key) => items[key][0]);
  
  const onPlusCartItem=(id)=>{
    dispatch(plusCartItem(id))
  }

  const onMinusCartItem=(id)=>{
    dispatch(minusCartItem(id))
  }

  const onRemoveCartItem=(id)=>{
    dispatch(removeCartItem(id))
  }

  function onClearCart() {
    if(window.confirm("вы действительно хотите очистить корзину?")){
      dispatch(clearCart())
    }
  }

  return (
    <div>
      <Header />
      <h1>Its a cart</h1>
      <div className="cart">
        {unicProducts.map((obj) => (
          <CartItem
            key={obj.id}
            id={obj.id}
            imgUrl={obj.imgUrl}
            manufacturer={obj.manufacturer}
            category={obj.category}
            name={obj.name}
            price={obj.price}
            onPlus= {onPlusCartItem}
            onMinus= {onMinusCartItem}
            onRemove={onRemoveCartItem}
          />
        ))}
      </div>
      <button onClick={onClearCart}>clear</button>
    </div>
  );
}

export default Cart;
