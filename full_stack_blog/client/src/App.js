import { React, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter.jsx';
import NavBar from './components/NavBar';
import { check } from './http/userAPI.js';
import { useDispatch } from 'react-redux';
import { logIn } from './redux/actions/user.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    check().then((data) => {dispatch(logIn(data))});
  }, []);

  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
