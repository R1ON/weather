import React from 'react';
import PropTypes from 'prop-types';

const LeftTreeIcon = ({ className }) => (
  <svg viewBox="0 0 155 250" className={className}>
    <g>
      <ellipse className="tree__leaf" cx="45" cy="45.5" rx="45" ry="45.5" transform="translate(0 49)" />
      <ellipse className="tree__leaf" cx="41.5" cy="42" rx="41.5" ry="42" transform="translate(41)" />
      <ellipse className="tree__leaf" cx="54.5" cy="47.5" rx="54.5" ry="47.5" transform="translate(46 37)" />
      <path className="tree__trunk" d="M19 0L35.4545 201.75H2.54552L19 0Z" transform="translate(57 49)" />
      <path className="tree__trunk" d="M4.5 0L8.39711 42H0.602886L4.5 0Z" transform="translate(88.3074 83) rotate(25.7256)" />
      <path className="tree__trunk" d="M4.5 0L8.39711 42H0.602886L4.5 0Z" transform="translate(53 115.329) rotate(-21.7065)" />
    </g>
  </svg>
);

LeftTreeIcon.defaultProps = {
  className: null
};

LeftTreeIcon.propTypes = {
  className: PropTypes.string
};

export default LeftTreeIcon;
