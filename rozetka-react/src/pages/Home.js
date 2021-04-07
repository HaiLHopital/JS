import { Header, Categories, MainBlock } from '../components';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import store from '../redux/store';
import setProducts from '../redux/actions/products';

function Home() {
  //const [products, setProducts] = useState([]);

  /*useEffect(() => {                                   idk if i should use axios, but since I know about it why not
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setProducts(json.products);
      });
  }, []);*/

  const dispatch = useDispatch();
  const {items} = useSelector((products)=>{
    return {
      items: products.items
    }
  })

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setProducts(data.products));
    });
  }, []);

  console.log(items)

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Categories />
        <MainBlock products={items} />
      </div>
    </div>
  );
}

export default Home;
