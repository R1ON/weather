import React from 'react';
import PropTypes from 'prop-types';

const GrayMountain = ({ className }) => (
  <svg width="418" height="279" viewBox="0 0 418 279" fill="none" className={className}>
    <path d="M194.109 0L229.279 48.5L289.779 16L416.558 186H0L194.109 0Z" transform="translate(1.22089 93)" fill="#6C686F" />
    <path d="M194.83 17L166.5 203H0L127.36 33L183.5 0L194.83 17Z" transform="translate(0.5 76)" fill="#4C494D" />
    <path d="M81.64 0L74.04 50L67.47 93L56.1942 76L0 109L81.64 0Z" transform="translate(127.86)" fill="#B2B2B2" />
    <path d="M14.2 0L95.7 109L35.2 141.5L0 93L4.80001 61.5L14.2 0Z" transform="translate(195.33)" fill="white" />
  </svg>
);

GrayMountain.defaultProps = {
  className: null
};

GrayMountain.propTypes = {
  className: PropTypes.string
};

export default GrayMountain;
