import { Header, Categories, MainBlock } from '../components';

import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  //const [products, setProducts] = useState([]);

  /*useEffect(() => {                                   idk if i should use axios, but since I know about it why not
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setProducts(json.products);
      });
  }, []);*/

  const {items} = useSelector((products) => products.products);

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
