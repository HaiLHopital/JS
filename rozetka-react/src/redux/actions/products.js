import axios from 'axios';

export const fetchProducts = (category, manufacturer) => (dispatch) => {
  const parse = (obj) => {
    let keys = Object.keys(obj);
    keys = keys.filter((curr) => obj[curr] === true);
    return keys.length > 0 ? '&manufacturer='.concat(keys.join('&manufacturer=')) : '';
  };



  axios
    .get(
      `http://localhost:3001/products?${
        category !== null ? `category=${category}` : ''
      }${category !== null ? parse(manufacturer): ''}`,
    )
    .then(({ data }) => {
      dispatch(setProducts(data));
    });
};

export const setProducts = (items) => ({
  type: 'set_products',
  payload: items,
});
