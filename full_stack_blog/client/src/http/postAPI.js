import { $host, $authHost } from './index';
import { setPosts } from '../redux/actions/post';
import { setComments } from '../redux/actions/comment';

export const createPost = async (userId, text) => {
  return await $authHost.post('api/posts/', { text, userId });
};

export const fetchPosts = () => {
  return (dispatch) => {
    $host.get('api/posts').then(({ data }) => {
      dispatch(setPosts(data));
    });
  };
};

export const fetchPostsUser = (id) => {
  return (dispatch) => {
    $host.get(`api/posts/user/${id}`).then(({ data }) => {
      dispatch(setPosts(data));
    });
  };
};

export const createComment = async (userId, postId, text) => {
  return await $authHost.post('api/comments/', { text, userId, postId });
};

export const fetchComments = (postId) => {
  return (dispatch) => {
    $host.get(`api/comments/post/${postId}`).then(({ data }) => {
      dispatch(setComments(data));
    });
  };
};
