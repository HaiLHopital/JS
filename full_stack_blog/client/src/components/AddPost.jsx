import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { createPost } from '../http/postAPI';

function AddPost() {
  const [post, setPost] = useState('');
  const { id } = useSelector(({ user }) => user.info);
  function handleAddPost() {
    try {
      console.log(post);
      createPost(id, post);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <Form className="mb-3">
      <Form.Group className="mb-3" controlId="textArea">
        <Form.Label>Enter your post!</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleAddPost}>
        Submit
      </Button>
    </Form>
  );
}

export default AddPost;
