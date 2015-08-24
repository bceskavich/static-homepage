import React, { Component, PropTypes } from 'react';
import { parseInlineLink } from '../../utils/markdownUtils';

export default class PortfolioItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const { item } = this.props;
    const image = require(`../../../img/${item.image}`);
    const headerStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover'
    }

    return (
      <div className='portfolio-item'>
        <div className='portfolio-header' style={headerStyle}>
          <div className='portfolio-header__gradient'>
            <h1 className='portfolio-header__text'>
              <span dangerouslySetInnerHTML={{__html: parseInlineLink(item.title)}} />
            </h1>
          </div>
        </div>
        <p className='portfolio-description'>
          <span dangerouslySetInnerHTML={{__html: parseInlineLink(item.description)}} />
        </p>

        <ul className='portfolio-links'>
          {
            item.links.map((link, i) => {
              return (
                <li key={i} className='portfolio-links__item'>
                  <a href={link.href}><i className={`fa fa-${link.type}`}></i></a>
                </li>
              );
            })
          }
        </ul>
        <hr />
      </div>
    );
  }
}
