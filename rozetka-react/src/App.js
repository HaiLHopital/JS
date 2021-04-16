import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './scss/App.scss';
import { fetchProducts } from './redux/actions/products';
import RouterConfig from './navigation/RouterConfig';

function App() {
  const dispatch = useDispatch();

  const { category, manufacturer } = useSelector((state) => state.filter);
  

  useEffect(() => {
    
    // need to suscribe dispatch to changes in filter and move sort to backend
    dispatch(fetchProducts(category, manufacturer)); // eslint-disable-next-line
  }, [category, manufacturer]);

  //useSelector from filter

  return <RouterConfig />;
}

export default App;
