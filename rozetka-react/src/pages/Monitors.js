import React from 'react';
import { Header, MainBlock } from '../components';
import { useSelector } from 'react-redux';

function Monitors() {
  const items = useSelector((store) =>
    store.products.items.filter((value) => value.category === 'monitor'),
  );

  return (
    <div>
      <Header />

      <h1>Monitors</h1>
      <div className="mainContainer">
        <div className="categories">
          <p>kekw</p>
        </div>
        <MainBlock products={items} />
      </div>
    </div>
  );
}

export default Monitors;
