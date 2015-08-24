import React from 'react';
import { Route } from 'react-router';
import App from '../app';
import HomePage from '../pages/HomePage';
import ResumePage from '../pages/ResumePage';
import PortfolioPage from '../pages/PortfolioPage';

let routes = (
  <Route name='home' path='/' handler={App}>
    <Route handler={HomePage} />
    <Route name='resume' path='/resume' handler={ResumePage} />
    <Route name='portfolio' path='/portfolio' handler={PortfolioPage} />
  </Route>
);

export default routes;
