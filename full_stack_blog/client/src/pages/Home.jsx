import { React, useEffect } from 'react';
import Post from '../components/Post';
import AddPost from '../components/AddPost';
import { Card, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../http/postAPI';

function Home() {
  const { isAuth } = useSelector(({ user }) => user);
  const { items } =useSelector(({post})=> post);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts()) 
  }, []);
  
  return (
    <Container>
      {isAuth ? <AddPost /> : <Card className="m-2 p-1"> Register or log in to add posts</Card>}
      {items.map((post, id) => (
        <Post key={id} {...post} />
      ))}
    </Container>
  );
}

export default Home;
