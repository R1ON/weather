import React from 'react';

const SpinnerIcon = () => (
  <svg viewBox="0 0 10 10" className="icon-spinner">
    <g>
      <circle r="2" cx="5" cy="3" className="icon-spinner__back-circle" />
      <circle r="2" cx="5" cy="3" className="icon-spinner__front-circle" />
    </g>
  </svg>
);

export default SpinnerIcon;
