const initialState = {
  items: {},
};

const comment = (state = initialState, action) => {
  if (action.type === 'SET_COMMENTS') {
    if (action.payload[0]) {
      const {postId} = action.payload[0]
      const newItems = {...state.items, [postId]:action.payload}
      return {
        ...state,
        items: newItems,
      };
    }

    return state;
  }
  return state;
};

export default comment;
