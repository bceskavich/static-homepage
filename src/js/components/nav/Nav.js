import React, { Component, PropTypes } from 'react';
import NavItem from './NavItem';

export default class Nav extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    navListClass: PropTypes.string.isRequired,
    navIconClass: PropTypes.string.isRequired,
    setNavClass: PropTypes.func.isRequired
  }

  render() {
    const { path, setNavClass, navListClass, navIconClass } = this.props;

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
            linkPath='/resume'
            title='RESUME'
          />
        </ul>
        <div
          className={navIconClass}
          onClick={setNavClass}
        ><i className='fa fa-bars'></i></div>
      </nav>
    );
  }
}
