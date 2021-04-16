const initialState = {
  category: null,
  manufacturer: {},
};

const filter = (state = initialState, action) => {
  if (action.type === 'set_category') {
    return {
      ...state,
      category: action.payload,
      manufacturer: null,
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
