export const addToCart = (items) => ({
  type: 'add_cart',
  payload: items,
});

export const plusCartItem = (id) => ({
  type: 'plus_cart_item',
  payload: id,
});

export const minusCartItem = (id) => ({
  type: 'minus_cart_item',
  payload: id,
});

export const removeCartItem = (id) => ({
  type: 'remove_cart_item',
  payload: id,
});
export const clearCart = () => ({
  type: 'clear_cart',
});
