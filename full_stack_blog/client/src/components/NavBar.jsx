import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../router/consts';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/user';

function NavBar() {
  const history = useHistory();
  const { isAuth } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  let handleLogOut = () => {
    localStorage.removeItem("token")
    dispatch(logOut());
  };
  
  return (
    <Navbar bg="dark" variant="dark">
      <NavLink style={{color:'white'}} to={MAIN_ROUTE}>Blog</NavLink>
      <Nav className="ml-auto">
        {!isAuth ? (
          <Button
            onClick={() => {
              history.push(LOGIN_ROUTE);
            }}>
            Login
          </Button>
        ) : (
          <Button onClick={handleLogOut}>Logout</Button>
        )}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
