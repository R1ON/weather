import React from 'react';
import PropTypes from 'prop-types';

const ErrorIcon = ({ circleHidden, slashHidden }) => (
  <svg viewBox="0 0 10 10" className="icon-error">
    <g>
      <circle r="2" cx="5" cy="3" style={{ animationName: circleHidden }} className="icon-error__circle" />
      <path d="M 4,2 L 6,4" style={{ animationName: slashHidden }} className="icon-error__slash" />
      <path d="M 6,2 L 4,4" style={{ animationName: slashHidden }} className="icon-error__back-slash" />
    </g>
  </svg>
);

ErrorIcon.defaultProps = {
  circleHidden: '',
  slashHidden: ''
};

ErrorIcon.propTypes = {
  circleHidden: PropTypes.string,
  slashHidden: PropTypes.string
};

export default ErrorIcon;
