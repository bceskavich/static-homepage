import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import ga, { Initializer } from 'react-google-analytics';

export default class App extends Component {
  constructor(props) {
    super(props);
    // On app load, set the GA token if in production
    if (process.env.NODE_ENV === 'production') {
      ga('create', GA_CODE, 'auto');
    }
  }

  render() {
    return (
      <div className='content'>
        <div className='body'>
          <RouteHandler {...this.props} />
        </div>

        <Initializer />
      </div>
    );
  }
}
