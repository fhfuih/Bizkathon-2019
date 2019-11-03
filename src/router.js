import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home';
import AInvestment from './pages/ainvestment';
import AICurrent from './pages/aiCurrent';
import AIReport from './pages/aiReport';

function AppRouter({ onRoute }) {
  return (
    <Router>
      <Home path="/" />
      <AInvestment path="/ainvestment" onRoute={onRoute} />
      <AICurrent path="/current" onRoute={onRoute} />
      <AIReport path="/report" onRoute={onRoute} />
    </Router>
  )
}

export default AppRouter;
