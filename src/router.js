import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home';

function AppRouter(props) {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default AppRouter;
