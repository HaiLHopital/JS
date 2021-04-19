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
          <form className="sort_menu">
            <label><input type="checkbox" id="HyperX" onChange={handleSetManufacturer} />
            hyperx</label>
            <label><input type="checkbox" id="Logitech" onChange={handleSetManufacturer} />
            logitech</label>
            <label><input type="checkbox" id="Apple" onChange={handleSetManufacturer} />
            apple</label>
          </form>
          
        </div>
        <MainBlock products={items} />
      </div>
    </div>
  );
}

export default Keyboards;
