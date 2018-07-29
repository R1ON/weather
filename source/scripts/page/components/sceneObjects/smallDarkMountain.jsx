import React from 'react';
import PropTypes from 'prop-types';

const SmallDarkMountain = ({ className }) => (
  <svg width="441" height="313" viewBox="0 0 441 313" fill="none" className={className}>
    <path d="M167 36L380 0L441 313H0L167 36Z" fill="#444151" />
    <path d="M167 36L380.5 0L372 88L224 112L0 313L167 36Z" fill="#585865" />
  </svg>
);

SmallDarkMountain.defaultProps = {
  className: null
};

SmallDarkMountain.propTypes = {
  className: PropTypes.string
};

export default SmallDarkMountain;
