import React, { Component, PropTypes } from 'react';
import bc from '../../../files/bc.pdf';
import ResumeItem from './ResumeItem';

export default class ResumeSection extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {
    const { title, items } = this.props;
    const sectionClass = title === 'Education' ? 'resume-section--left' : 'resume-section--right';

    return (
      <div className={sectionClass}>
        <h1 className='resume-section__title'>{title}</h1>
        {
          items.map((item, i) => {
            return (
              <ResumeItem
                key={i}
                item={item}
              />
            );
          })
        }
        {
          /*
          sectionClass.match('--left') && window.innerWidth > 1024 &&
            <div>
              <hr />
              <p>Download a PDF copy <a href={bc}>here</a>.</p>
            </div>
          */
        }
      </div>
    );
  }
}
