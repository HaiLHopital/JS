const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {

  if (action.type === 'add_cart') {
    const currentProduct = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id], action.payload];

    const newItems = {
      ...state.items,
      [action.payload.id]:  currentProduct,
      
    };

    const totalPrice = 11;
    const totalCount = 11;

    return {
      ...state,
      items: newItems,
      totalCount,
      totalPrice,
    };
  }

  return state;
};

export default cart;
