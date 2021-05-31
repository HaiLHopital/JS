const initialState = {
  items: [],
};

const post = (state = initialState, action) => {
  if (action.type === 'SET_POSTS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state
};

export default post;
