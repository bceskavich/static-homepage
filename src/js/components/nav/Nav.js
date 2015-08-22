import React, { Component, PropTypes } from 'react';
import NavItem from './NavItem';

export default class Nav extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    const windowWidth = window.innerWidth;

    this.state = {
      navListClass: 'nav__links',
      windowWidth,
      navIconClass: windowWidth < 769 ? 'nav__icon--show' : 'nav__icon'
    };

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    const { path } = this.props;
    const { navListClass, navIconClass } = this.state;

    return (
      <nav className='nav'>
        <ul className={navListClass}>
          <NavItem
            currentPath={path}
            linkPath='/'
            title='HOME'
          />
          <NavItem
            currentPath={path}
            linkPath='#'
            title='ABOUT'
          />
          <NavItem
            currentPath={path}
            linkPath='#'
            title='WORK'
          />
          <NavItem
            currentPath={path}
            linkPath='#'
            title='RESUME'
          />
        </ul>
        <div
          className={navIconClass}
          onClick={this.setNavClass.bind(this)}
        ><i className='fa fa-bars'></i></div>
      </nav>
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
}
