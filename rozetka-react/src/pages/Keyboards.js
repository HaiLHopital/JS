import React from 'react';
import { Header, MainBlock } from '../components';
import { useSelector } from 'react-redux';

function Keyboards() {
  const items = useSelector((store) =>
    store.products.items.filter((value) => value.category === 'keyboard'),
  );

  return (
    <div>
      <Header />

      <h1>Keyboards</h1>
      <div className="mainContainer">
        <div className="categories">
          <p>kekw</p>
        </div>
        <MainBlock products={items} />
      </div>
    </div>
  );
}

export default Keyboards;
