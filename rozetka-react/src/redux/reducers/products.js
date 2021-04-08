const initialState = {
  items: [],
  //isLoaded: false
};

const productsReducer = (state = initialState, action) => {
  if (action.type === 'set_products') {
    return {
      ...state,
      items: action.payload,
      //isLoaded: true,
    };
  }

  return state;
};

export default productsReducer;
