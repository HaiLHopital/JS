import { React, useEffect } from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsUser } from '../http/postAPI';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function User() {
  const { id } = useParams();
  const { items } = useSelector(({ post }) => post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsUser(id));
  }, []);

  if (!items.length) return <h3>No messages found </h3>;

  return (
    <div>
      <div style={{ padding: '10px', margin: 'auto', width: "60%" }}>
        <h1 >{items[0].user.login}</h1>
      </div>

      <Container>
        {items.map((post, id) => (
          <Post key={id} {...post} />
        ))}
      </Container>
    </div>
  );
}
export default User;
