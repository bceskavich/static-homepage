import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component {

  static propTypes = {
    currentPath: PropTypes.string.isRequired,
    linkPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { currentPath, linkPath, title } = this.props;
    const linkClass = 'nav__links-anchor';
    const linkClassActive = 'nav__links-anchor--active';

    return (
      <li className='nav__links-item'>
        <Link
          className={currentPath === linkPath ? linkClassActive : linkClass}
          to={linkPath}
        >{title}</Link>
      </li>
    );
  }
}
