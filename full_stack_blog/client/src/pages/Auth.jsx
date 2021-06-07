import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../router/consts';
import { registration, login as loginReq } from '../http/userAPI';
import { useDispatch } from 'react-redux';
import { logIn, register } from '../redux/actions/user';

export default function Auth() {
  const location = useLocation();
  const history = useHistory();
  let isRegistration = location.pathname === REGISTRATION_ROUTE;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const click = async () => {
    try {
       
      if (isRegistration) {
        let data = await registration(login, password);
        dispatch(register(data));
      } else {
        let data = await loginReq(login, password);
        dispatch(logIn(data));
      }
      
      history.push(MAIN_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      style={{ height: window.innerHeight - 100 }}
      className="d-flex justify-content-center align-items-center">
      <Card style={{ width: 700 }} className="p-5">
        <h2 className="m-auto">{isRegistration ? 'Registration' : 'Log in'}</h2>
        <Form>
          <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isRegistration ? (
              <div>
                Have an account already? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            ) : (
              <div>
                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Make one!</NavLink>
              </div>
            )}
            <Button variant="primary" onClick={click}>
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
