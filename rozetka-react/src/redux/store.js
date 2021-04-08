import thunk from 'redux-thunk';
import { createStore, compose /*combineReducers*/, applyMiddleware } from 'redux';

import productsReducer from './reducers/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(productsReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
