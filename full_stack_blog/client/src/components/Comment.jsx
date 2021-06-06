import { React, useState } from 'react';
import { Button, Card, Collapse, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { createComment, fetchComments } from '../http/postAPI';
import { useSelector, useDispatch } from 'react-redux';

function Comment({ postId }) {
  const { isAuth } = useSelector(({ user }) => user);
  const [open, setOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { id } = useSelector(({ user }) => user.info);
  let comments = useSelector(({ comment }) => comment.items[postId]);
  const dispatch = useDispatch();

  function showComments() {
    setOpen(!open);
    dispatch(fetchComments(postId));
  }

  function handleSendComment() {
    createComment(id, postId, commentText).then(({data})=>dispatch(fetchComments(data.postId)))
    setCommentText('');
    
  }

  return (
    <div>
      <Button onClick={showComments}>comment section</Button>
      <Collapse in={open}>
        <Container className="pt-3">
          <ListGroup>
            {comments ? (
              comments.map((comment, id) => (
                <ListGroupItem key={id}>
                  {comment.user.login}:{comment.text}
                </ListGroupItem>
              ))
            ) : (
              <Card> no comments yet, feel free to add one</Card>
            )}
          </ListGroup>

          {isAuth ? (
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
          ) : (
            <Card>Please log in to left comments</Card>
          )}
        </Container>
      </Collapse>
    </div>
  );
}

export default Comment;
