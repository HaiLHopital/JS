import { useSelector, useDispatch } from 'react-redux';
import { React, useCallback, useEffect } from 'react';

import { Header, MainBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

function Keyboards() {
  const { items } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const selectCategory = useCallback(() => {
    dispatch(setCategory('keyboard')); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    selectCategory(); // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />

      <h1>Keyboards</h1>
      <div className="mainContainer">
        <div className="categories">
         {/*  <form className="sortMenu">
            <input type="checkbox" id="123"/><label for="123">kekw</label>
            <input type="checkbox" id="456"/><label for="456">kekw1</label>
            <input type="checkbox" id="789"/><label for="789">kekw2</label>
  </form>*/}
        </div>
        <MainBlock products={items} />
      </div>
    </div>
  );
}

export default Keyboards;
