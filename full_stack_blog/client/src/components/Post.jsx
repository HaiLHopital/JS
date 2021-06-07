import React from 'react';
import { Card } from 'react-bootstrap';
import Comment from './Comment';
import { NavLink } from 'react-router-dom';

function Post({ user, text, id, userId }) {
  const pathLink = '/user/' + userId;
  return (
    <Card>
      <Card.Body>
        <NavLink to={pathLink}>
          <Card.Title>{user.login}</Card.Title>
        </NavLink>
        <Card.Text>{text}</Card.Text>
        <Comment postId={id} />
      </Card.Body>
    </Card>
  );
}

export default Post;
