import { combineReducers } from 'redux';

import cart from './cart';
import products from './products';
import filter from './filters';

const rootReducer = combineReducers({
  cart,
  filter,
  products,
});

export default rootReducer;
