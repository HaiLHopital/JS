import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Item from './SellingItem';

function MainBlock() {
  //should be moved out upper in hierarchy

  const [products, setProducts] = useState([]);

  /*useEffect(() => {                                   idk if i should use axios, but since I know about it why not
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setProducts(json.products);
      });
  }, []);*/

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="displayedItems">
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default MainBlock;
