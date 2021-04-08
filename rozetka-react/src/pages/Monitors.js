import React from 'react';
import { Header, MainBlock } from '../components';
import { useSelector } from 'react-redux';

function Monitors() {
  const items = useSelector((products) =>
    products.items.filter((value) => value.category === 'monitor'),
  );

  return (
    <div>
      <Header />

      <h1>Monitors</h1>
      <MainBlock products={items} />
    </div>
  );
}

export default Monitors;
