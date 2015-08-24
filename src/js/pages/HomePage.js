import React, { Component, PropTypes } from 'react';

export default class HomePage extends Component {

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
            Developer at <a href="http://bits.ischool.syr.edu/" target="_blank">
            BITS Lab</a>.
          </li>
          <li className='home__taglines-item'>
            Engagement Fellow at
            the <a href="http://ischool.syr.edu/" target="_blank">
            Syracuse University iSchool</a>.
          </li>
          <li className='home__taglines-item'>
            Sock enthusiast.
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
