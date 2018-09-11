import React from 'react';
import PropTypes from 'prop-types';

const Tree = ({ className }) => (
  <svg width="200" height="344" viewBox="0 0 200 344" fill="none" className={className}>
    <g>
      <circle cx="100" cy="100" r="100" fill="#707B33" />
      <path d="M100 100C100 155.228 55.2285 200 6.92216e-05 200C-6.10352e-05 100 3.29819e-05 155.228 3.29819e-05 100C3.29819e-05 44.7715 3.29819e-05 100 6.92216e-05 0C55.2285 0 100 44.7715 100 100Z" transform="translate(100)" fill="#8E9F39" />
      <line x1="5" y1="-5" x2="245" y2="-5" transform="translate(105 349) rotate(-90)" stroke="#663300" strokeWidth="10" strokeLinecap="round" />
      <line x1="2.5" y1="-2.5" x2="47.5" y2="-2.5" transform="translate(101 128.301) rotate(-120)" stroke="#663300" strokeWidth="5" strokeLinecap="round" />
      <line x1="2.5" y1="-2.5" x2="47.5" y2="-2.5" transform="translate(104 149.301) rotate(-60)" stroke="#663300" strokeWidth="5" strokeLinecap="round" />
      <line x1="2.5" y1="-2.5" x2="47.5" y2="-2.5" transform="translate(104 193.301) rotate(-60)" stroke="#663300" strokeWidth="5" strokeLinecap="round" />
      <line x1="2.5" y1="-2.5" x2="47.5" y2="-2.5" transform="translate(101 175.301) rotate(-120)" stroke="#663300" strokeWidth="5" strokeLinecap="round" />
    </g>
  </svg>
);

Tree.defaultProps = {
  className: null
};

Tree.propTypes = {
  className: PropTypes.string
};

export default Tree;
