import React from 'react';
import PropTypes from 'prop-types';

const BlueMountain = ({ className }) => (
  <svg width="382" height="256" viewBox="0 0 382 256" fill="none" className={className}>
    <g>
      <path d="M220 0L410.526 255.75H29.4744L220 0Z" transform="translate(-29)" fill="#A7ADC7" />
      <path d="M190.344 0L130.344 255.75H0L190.344 0Z" transform="translate(0.655792)" fill="#8087AD" />
    </g>
  </svg>
);

BlueMountain.defaultProps = {
  className: null
};

BlueMountain.propTypes = {
  className: PropTypes.string
};

export default BlueMountain;
