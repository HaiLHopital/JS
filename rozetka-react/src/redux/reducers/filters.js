const initialState = {
  category: null,
  manufacturer: null,
};

const filter = (state = initialState, action) => {
  if (action.type === 'set_category') {
    return {
      ...state,
      category: action.payload,
    };
  }

  if (action.type === 'set_manufacturer') {
    return {
      ...state,
      manufacturer: action.payload,
    };
  }
  return state;
};

export default filter;
