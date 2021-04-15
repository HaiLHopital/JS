const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'add_cart': {
      const currentProduct = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: currentProduct,
      };

      const totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum,obj)=>sum+obj.price,0);  //repeating of code, but idk how the fuck should I avoid this here, not now for sure
      const totalCount = [].concat.apply([], Object.values(newItems)).length;

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'plus_cart_item': {
      const currentProduct = [...state.items[action.payload], state.items[action.payload][0]];

      console.log(currentProduct);
      const newItems = {
        ...state.items,
        [action.payload]: currentProduct,
      };

      const totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum,obj)=>sum+obj.price,0);
      const totalCount = [].concat.apply([], Object.values(newItems)).length;

      return { ...state, items: newItems, totalCount, totalPrice };
    }
    case 'minus_cart_item': {
      const oldItems = state.items[action.payload];

      const currentProduct = oldItems.length > 1 ? state.items[action.payload].slice(1) : oldItems; //kostyl incoming xD
      const newItems = {
        ...state.items,
        [action.payload]: currentProduct,
      };

      const totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum,obj)=>sum+obj.price,0);
      const totalCount = [].concat.apply([], Object.values(newItems)).length;

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'remove_cart_item': {
      const newItems = {
        ...state.items,
      };

      delete newItems[action.payload];

      const totalPrice = [].concat.apply([], Object.values(newItems)).reduce((sum,obj)=>sum+obj.price,0);
      const totalCount = [].concat.apply([], Object.values(newItems)).length;

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'clear_cart': {
      return initialState;
    }
    default:
      return state;
  }
};

export default cart;
