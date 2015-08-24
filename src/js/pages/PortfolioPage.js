import React, { Component, PropTypes } from 'react';
import portfolio from '../../../lib/portfolio';
import PortfolioItem from '../components/portfolio/PortfolioItem';

export default class PortfolioPage extends Component {

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
      <div className='portfolio'>
        {
          portfolio.map((item, i) => {
            return (
              <PortfolioItem
                key={i}
                item={item}
              />
            );
          })
        }
      </div>
    );
  }
}
