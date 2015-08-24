import React, { Component, PropTypes } from 'react';
import keys from 'lodash/object/keys';
import capitalize from 'lodash/string/capitalize';
import resume from '../../../lib/resume';
import ResumeSection from '../components/resume/ResumeSection';

export default class ResumePage extends Component {

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
      <div className='resume'>
        {
          keys(resume).map((value, i) => {
            return (
              <ResumeSection
                key={i}
                title={capitalize(value)}
                items={resume[value]}
              />
            );
          })
        }
      </div>
    );
  }
}
