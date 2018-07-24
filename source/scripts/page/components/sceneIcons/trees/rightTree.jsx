import React from 'react';
import PropTypes from 'prop-types';

const RightTreeIcon = ({ className }) => (
  <svg viewBox="0 0 90 299" className={className}>
    <g>
      <ellipse className="tree__leaf" cx="45" cy="101.5" rx="45" ry="101.5" />
      <path className="tree__trunk" d="M19 0L35.4545 201.75H2.54552L19 0Z" transform="translate(34 101)" />
      <path className="tree__trunk" d="M5 0L9.33013 59.25H0.669873L5 0Z" transform="translate(70.602 133) rotate(24.3735)" />
      <path className="tree__trunk" d="M5 0L9.33013 59.25H0.669873L5 0Z" transform="translate(19 153.738) rotate(-28.2828)" />
    </g>
  </svg>
);

RightTreeIcon.defaultProps = {
  className: null
};

RightTreeIcon.propTypes = {
  className: PropTypes.string
};

export default RightTreeIcon;
