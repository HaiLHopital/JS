import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './scss/App.scss';
import { fetchProducts } from './redux/actions/products';
import RouterConfig from './navigation/RouterConfig';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // eslint-disable-next-line
  }, []);

  return <RouterConfig />;
}

export default App;
