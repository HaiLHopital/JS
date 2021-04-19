import { useSelector, useDispatch } from 'react-redux';
import { React, useCallback, useEffect, useState } from 'react';

import { Header, MainBlock } from '../components';
import { setCategory, setManufacturer } from '../redux/actions/filters';

function Monitors() {
  const { items } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const selectCategory = useCallback(() => {
    dispatch(setCategory('monitor')); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    selectCategory(); // eslint-disable-next-line
  }, []);

  //manufact sort change
  const [manufacturer, onSetManufacturer] = useState({
    Samsung: false,
    Acer: false,
  });

  const handleSetManufacturer = (event) => {
    const id = event.target.id;
    onSetManufacturer((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectManufacturer = useCallback((manufacturer) => {
    dispatch(setManufacturer(manufacturer)); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    selectManufacturer(manufacturer); // eslint-disable-next-line
  }, [manufacturer]);

  return (
    <div>
      <Header />

      <h1>Monitors</h1>
      <div className="mainContainer">
        <div className="categories">
          <form className="sort_menu">
            <label><input type="checkbox" id="Samsung" onChange={handleSetManufacturer} />
            Samsung</label>
            <label><input type="checkbox" id="Acer" onChange={handleSetManufacturer} />
            Acer</label>
          </form>
        </div>
        <MainBlock products={items} />
      </div>
    </div>
  );
}

export default Monitors;
