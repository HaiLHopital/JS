import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter.jsx';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
