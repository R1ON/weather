import React from 'react';

const ErrorIcon = () => (
  <svg viewBox="0 0 10 10" className="icon-error">
    <g>
      <circle r="2" cx="5" cy="3" className="icon-error__circle" />
      <path d="M 4,2 L 6,4" className="icon-error__slash" />
      <path d="M 6,2 L 4,4" className="icon-error__back-slash" />
    </g>
  </svg>
);

export default ErrorIcon;
