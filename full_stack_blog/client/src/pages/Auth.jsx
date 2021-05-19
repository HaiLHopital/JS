import React from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';

export default function Auth() {
  return (
    <Container style={{height:window.innerHeight-100}}className="d-flex justify-content-center align-items-center">
      <Card style={{width:700}} className="p-5">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="Enter login" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
