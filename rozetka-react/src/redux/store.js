import { createStore, /*combineReducers*/ } from 'redux';

import productsReducer from './reducers/products'

const store = createStore(productsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
