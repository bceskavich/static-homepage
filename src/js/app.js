import React, { Component, PropTypes } from 'react';
import { RouteHandler } from 'react-router';
import ga, { Initializer } from 'react-google-analytics';
import Nav from './components/nav/Nav';

export default class App extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    // On app load, set the GA token if in production
    if (process.env.NODE_ENV === 'production') {
      ga('create', GA_CODE, 'auto');
    }
  }

  render() {
    const { path } = this.props;

    return (
      <div className='content'>
        <Nav path={path} />

        <div className='body'>
          <RouteHandler {...this.props} />
        </div>

        <Initializer />
      </div>
    );
  }
}
