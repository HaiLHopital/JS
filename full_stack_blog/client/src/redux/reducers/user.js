const initialState = {
  isAuth: false,
  info: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        isAuth: true,
        info: action.payload,
      };
    case 'USER_REGISTER':
      return {
        ...state,
        isAuth: true,
        info: action.payload,
      };
    case 'USER_LOG_OUT':
      return initialState
    default:
      return state;
  }
};

export default user;
