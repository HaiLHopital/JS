import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import { Header } from '../components';
import { plusCartItem, minusCartItem, removeCartItem, clearCart } from '../redux/actions/cart';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  //maybe it's better to store cartitems in different way, without adding every item as unic entrance

  const unicProducts = Object.keys(items).map((key) => ({
    ...items[key][0],
    number: items[key].length,
  }));

  const onPlusCartItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusCartItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  function onClearCart() {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  }

  return (
    <div>
      <Header />
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
            number={obj.number}
            onPlus={onPlusCartItem}
            onMinus={onMinusCartItem}
            onRemove={onRemoveCartItem}
          />
        ))}
      </div>

      <div className="cart__info">
        <h4>Количество: {totalCount}</h4>
        <h4>Цена: {totalPrice} &#8372;</h4>
      </div>
      <button onClick={onClearCart} className="cart__clear_button">
        Очистить корзину
      </button>
    </div>
  );
}

export default Cart;
