import React from 'react';

const SuccessIcon = () => (
  <svg viewBox="0 0 10 10" className="icon-success">
    <g>
      <circle r="2" cx="5" cy="3" className="icon-success__circle" />
      <path d="M 4,3 L 4.8,4" className="icon-success__slash" />
      <path d="M 6,2 L 4.8,4" className="icon-success__back-slash" />
    </g>
  </svg>
);

export default SuccessIcon;
