import { Header, Categories, MainBlock } from '../components';
import { setCategory } from '../redux/actions/filters';


import {React, useCallback,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const { items } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const selectCategory = useCallback(() => {
    dispatch(setCategory(null)); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    selectCategory(); // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Categories />
        <MainBlock products={items} />        {/*:TODO*/}
      </div>
    </div>
  );
}

export default Home;
