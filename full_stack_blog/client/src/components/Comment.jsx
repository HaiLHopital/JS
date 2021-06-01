import { React, useState } from 'react';
import { Button, Card, Collapse, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { createComment, fetchComments } from '../http/postAPI';
import { useSelector, useDispatch } from 'react-redux';

function Comment({ postId }) {
  const [open, setOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { id } = useSelector(({ user }) => user.info);
  let comments = useSelector(({ comment }) => comment.items[postId]);
  const dispatch = useDispatch();

  function showComments() {
    setOpen(!open);
    dispatch(fetchComments(postId));
  }

  function handleSendComment(params) {
    createComment(id, postId, commentText)
    setCommentText('');
  }

  return (
    <div>
      <Button onClick={showComments}>comment {postId}</Button>
      <Collapse in={open}>
        <Container className="pt-3">
          <ListGroup>
            {comments ? (
              comments.map((comment, id) => (
                <ListGroupItem key={id}>
                  {comment.userId}:{comment.text}
                </ListGroupItem>
              ))
            ) : (
              <Card> no comments yet, feel free to add one</Card>
            )}
          </ListGroup>

          <Form>
            <Form.Group>
              <Form.Label>Enter yout comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSendComment}>
              Send Comment
            </Button>
          </Form>
        </Container>
      </Collapse>
    </div>
  );
}

export default Comment;
