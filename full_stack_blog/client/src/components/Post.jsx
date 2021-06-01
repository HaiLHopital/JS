import React from 'react';
import { Card } from 'react-bootstrap';
import Comment from './Comment';

function Post({ author, text, id }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Comment postId={id}/>
      </Card.Body>
    </Card>
  );
}

export default Post;
