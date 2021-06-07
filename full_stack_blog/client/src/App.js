import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter.jsx';
import NavBar from './components/NavBar';
import { check } from './http/userAPI.js';
import { useDispatch } from 'react-redux';
import { logIn } from './redux/actions/user.js';
import { Spinner } from 'react-bootstrap';
import ScrollToTop from './router/scrollToTop'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    check()
      .then((data) => {
        dispatch(logIn(data));
      })
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />
}

  return (
    <Router>
      <ScrollToTop/>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
