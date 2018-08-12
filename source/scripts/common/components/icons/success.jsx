import React from 'react';
import PropTypes from 'prop-types';

const SuccessIcon = ({ circleHidden, slashHidden }) => (
  <svg viewBox="0 0 10 10" className="icon-success">
    <g>
      <circle r="2" cx="5" cy="3" style={{ animationName: circleHidden }} className="icon-success__circle" />
      <path d="M 4,3 L 4.8,4" style={{ animationName: slashHidden }} className="icon-success__slash" />
      <path d="M 6,2 L 4.8,4" style={{ animationName: slashHidden }} className="icon-success__back-slash" />
    </g>
  </svg>
);

SuccessIcon.defaultProps = {
  circleHidden: '',
  slashHidden: ''
};

SuccessIcon.propTypes = {
  circleHidden: PropTypes.string,
  slashHidden: PropTypes.string
};

export default SuccessIcon;
