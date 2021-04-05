const initialState = {
  items: [],
  isLoaded: false
};

const products = (state = initialState, action) => {
  if (action.type === 'set_products') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }

  return state;
};

export default products;
