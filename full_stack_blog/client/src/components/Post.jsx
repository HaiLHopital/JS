import { React, useState } from 'react';
import { Button, Card, Collapse, Form } from 'react-bootstrap';

function Post({ author, text }) {
  const [open, setOpen] = useState(false);

  function addComment() {
    setOpen(!open);
    console.log(author);
  }
  return (
    <Card >
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button onClick={addComment}>comment</Button>
        <Collapse in={open}>
          <Form>
            <Form.Group >
              <Form.Label>Enter yout comment</Form.Label>
              <Form.Control type="text" placeholder="..." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default Post;
