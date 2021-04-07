import React from 'react';

import Item from './SellingItem';

function MainBlock(props) {
  return (
    <div className="displayedItems">
      {props.products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default MainBlock;
