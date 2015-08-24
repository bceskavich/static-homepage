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

    // Own nav state for reset on page change
    const windowWidth = window.innerWidth;
    this.state = {
      windowWidth,
      navListClass: 'nav__links',
      navIconClass: windowWidth < 769 ? 'nav__icon--show' : 'nav__icon'
    };

    // For handling changes on window resize
    window.addEventListener('resize', this.handleResize.bind(this));

    // On app load, set the GA token if in production
    if (process.env.NODE_ENV === 'production') {
      ga('create', GA_CODE, 'auto');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    const { path } = this.props;
    const { navListClass, navIconClass } = this.state;

    return (
      <div className='content'>
        <Nav
          path={path}
          navListClass={navListClass}
          navIconClass={navIconClass}
          setNavClass={this.setNavClass.bind(this)}
        />

        <div className='body'>
          <RouteHandler {...this.props} resetNav={this.resetNav.bind(this)} />
        </div>

        <Initializer />
      </div>
    );
  }

  handleResize(e) {
    this.setState(prevState => {
      const { navListClass, navIconClass } = prevState;
      const windowWidth = window.innerWidth;

      return {
        navListClass,
        windowWidth,
        navIconClass: windowWidth < 769 ? 'nav__icon--show' : 'nav__icon'
      };
    });
  }

  setNavClass() {
    this.setState(prevState => {
      const { navListClass, navIconClass, windowWidth } = prevState;

      return {
        navIconClass,
        windowWidth,
        navListClass: navListClass.match('--show') ? 'nav__links' : 'nav__links--show'
      };
    });
  }

  resetNav() {
    const { navListClass } = this.state;
    if (navListClass.match('--show')) {
      this.setNavClass();
    }
  }
}
