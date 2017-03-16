import React, { Component, PropTypes } from 'react';
import Analyze from '../utils/hocs/Analyze';

class HomePage extends Component {

  static propTypes = {
    resetNav: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    const { resetNav } = this.props;
    resetNav();
  }

  render() {
    return (
      <div className='home'>
        <h1 className='home__header'>
          Hey, it's <span className='home__header-name'>Billy!</span>
        </h1>
        <p className='home__email'>
          bceskavich <strong>[at]</strong> gmail.com
        </p>

        <ul className='home__taglines'>
          <li className='home__taglines-item'>
            Full stack engineer at <a href='http://voxmedia.com/' target='_blank'>
            Vox Media</a>.
          </li>
          <li className='home__taglines-item'>
            Previously: <a href='http://madebymany.com/' target='_blank'>
              Made by Many
            </a>, <a href='http://about.twitter.com/' target='_blank'>
              Twitter
            </a>, <a href='http://evernote.com/' target='_blank'>
              Evernote
            </a>.
          </li>
        </ul>

        <ul className='home__icons'>
          <li className='home__icons-item'>
            <a
              className='home__icons-link'
              href='https://github.com/bceskavich'
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className='home__icons-item'>
            <a
              className='home__icons-link'
              href='https://linkedin.com/in/ceskavich'
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className='home__icons-item'>
            <a
              className='home__icons-link'
              href='https://twitter.com/ceskavich'
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className='home__icons-item'>
            <a
              className='home__icons-link'
              href='https://instagram.com/ceskavich'
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Analyze(HomePage, 'HomePage');
