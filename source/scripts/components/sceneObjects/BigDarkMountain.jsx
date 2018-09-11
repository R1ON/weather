import React from 'react';
import PropTypes from 'prop-types';

const BigDarkMountain = ({ className }) => (
  <svg width="441" height="351" viewBox="0 0 441 351" fill="none" className={className}>
    <path d="M180 0L373 30L441 351H0L180 0Z" fill="#444151" />
    <path d="M180 0L373 30L336 65L213 52L0 351L180 0Z" fill="#585865" />
  </svg>
);

BigDarkMountain.defaultProps = {
  className: null
};

BigDarkMountain.propTypes = {
  className: PropTypes.string
};

export default BigDarkMountain;
