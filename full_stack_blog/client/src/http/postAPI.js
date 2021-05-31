import { $host, $authHost } from './index';
import { setPosts } from '../redux/actions/post';

export const createPost = async (userId, text) => {
  await $authHost.post('api/posts/', { text, userId });
};

export const fetchPosts = () => {
  return (dispatch) => {
    $host.get('api/posts').then(({ data }) => {
      dispatch(setPosts(data));
    });
  };
};
