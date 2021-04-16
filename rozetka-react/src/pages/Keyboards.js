import { useSelector, useDispatch } from 'react-redux';
import { React, useCallback, useEffect, useState } from 'react';

import { Header, MainBlock } from '../components';
import { setCategory, setManufacturer } from '../redux/actions/filters';

function Keyboards() {
  const dispatch = useDispatch();

  //this logic should be moved to its own component or upper in hierarhy
  // since it's lowkey repeatable on all pages
  //I don't know if I can tho, since my architecture is a bit weird
  
  const { items } = useSelector((store) => store.products);
  const selectCategory = useCallback(() => {
    dispatch(setCategory('keyboard')); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    selectCategory(); // eslint-disable-next-line
  }, []);


  //manufact sort change
  const [manufacturer, onSetManufacturer] = useState({
    HyperX: false,
    Logitech: false,
    Apple: false,
  });

  const handleSetManufacturer = (event) => {
    const id = event.target.id;
    onSetManufacturer((prev) => ({ ...prev, [id]: !prev[id] }));
  };

 const selectManufacturer = useCallback((manufacturer) => {
    dispatch(setManufacturer(manufacturer));// eslint-disable-next-line
  }, []);

  useEffect(() => {
    selectManufacturer(manufacturer)// eslint-disable-next-line
  }, [manufacturer]);

  return (
    <div>
      <Header />

      <h1>Keyboards</h1>
      <div className="mainContainer">
        <div className="categories">
          <form className="sortMenu">
            <input type="checkbox" id="HyperX" onChange={handleSetManufacturer} />
            <label>hyperx</label>
            <input type="checkbox" id="Logitech" onChange={handleSetManufacturer} />
            <label>logitech</label>
            <input type="checkbox" id="Apple" onChange={handleSetManufacturer} />
            <label>apple</label>
          </form>
          <br />
          <p>{Object.values(manufacturer)[0] ? 1 : 0}</p>
          <p>{Object.values(manufacturer)[1] ? 1 : 0}</p>
          <p>{Object.values(manufacturer)[2] ? 1 : 0}</p>
        </div>
        <MainBlock products={items} />
      </div>
    </div>
  );
}

export default Keyboards;
