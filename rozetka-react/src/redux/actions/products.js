import axios from 'axios';

export const fetchProducts = (category, manufacturer) => (dispatch) => {
  axios
    .get(`http://localhost:3001/products?${category !== null ? `category=${category}` : ''}`)
    .then(({ data }) => {
      //add backend filtering xd
      dispatch(setProducts(data));
    });
};

export const setProducts = (items) => ({
  type: 'set_products',
  payload: items,
});
