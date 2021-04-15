import React from 'react';

import Item from './SellingItem';

function MainBlock({products}) {
  return (
    <div className="displayedItems">
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default MainBlock;
