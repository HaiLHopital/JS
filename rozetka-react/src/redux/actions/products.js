import axios from 'axios';

export const fetchProducts = () => (dispatch) => {
  axios.get('http://localhost:3001/products').then(({ data }) => {
    dispatch(setProducts(data));
    console.log(data);
  });
};

export const setProducts = (items) => ({
  type: 'set_products',
  payload: items,
});
