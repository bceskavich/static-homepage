import React from 'react';
import { Route } from 'react-router';
import App from '../app';
import HomePage from '../pages/HomePage';
import ResumePage from '../pages/ResumePage';

let routes = (
  <Route name='home' path='/' handler={App}>
    <Route handler={HomePage} />
    <Route name='resume' path='/resume' handler={ResumePage} />


    <Route name='#' handler={HomePage} />
  </Route>
);

export default routes;
