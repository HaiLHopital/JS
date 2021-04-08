import React from 'react';
import { Header, MainBlock } from '../components';
import { useSelector } from 'react-redux';

function Keyboards() {
  const items = useSelector((products) =>
    products.items.filter((value) => value.category === 'keyboard'),
  );

  return (
    <div>
      <Header />

      <h1>Keyboards</h1>
      <MainBlock products={items} />
    </div>
  );
}

export default Keyboards;
