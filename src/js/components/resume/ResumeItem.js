import React, { Component, PropTypes } from 'react';
import { parseInlineLink } from '../../utils/markdownUtils';

export default class ResumeItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const { item } = this.props;

    return (
      <div className='resume-item'>
        {this.getItemTitle(item.company, item.title)}
        <h3 className='resume-item__when'>{item.location} / {item.date}</h3>
        <ul className='resume-item__details'>
          {
            item.bullets.map((detail, i) => {
              return (
                <li key={i}>
                  <span dangerouslySetInnerHTML={{
                    __html: parseInlineLink(detail)
                  }} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  getItemTitle(company, title) {
    if (company) {
      return (
        <h2 className='resume-item__title'>
          <span dangerouslySetInnerHTML={{__html: parseInlineLink(company)}} />
          &nbsp;/&nbsp;{title}
        </h2>
      );
    } else {
      return (
        <h2 className='resume-item__title'>
          {
            title.split('\n').map((title, i) => {
              return (
                <div key={i}>
                  {title}<br />
                </div>
              );
            })
          }
        </h2>
      );
    }
  }
}
