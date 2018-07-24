import React from 'react';
import PropTypes from 'prop-types';

const HomeIcon = ({ className }) => (
  <svg viewBox="0 0 72 83" className={className} >
    <rect className="home__wall" width="60" height="51" transform="translate(6 31)" />
    <rect className="home__foundation" width="66" height="2" transform="translate(3 81)" />
    <rect className="home__threshold" width="20" height="2" transform="translate(41 81)" />
    <path className="home__wall-roof" transform="translate(6 6)" d="M0 30L30 0L60 30H30H0Z" />
    <path className="home__roof-left-shadow" transform="translate(6 5.5)" d="M30 6L0 36V32.5V30L30 0L34.5 4.5L31.5 7.5L30 6Z" />
    <path className="home__roof-right-shadow" transform="translate(66 5.5) scale(-1 1)" d="M30 6L0 36V32.5V30L30 0V6Z" />
    <path className="home__roof-left" d="M36 6L6 36H0L6 30L36 0L40.5 4.5L38 8L36 6Z" />
    <path className="home__roof-right" transform="translate(36)" d="M0 6V0L30 30L36 36H30L0 6Z" />
    <rect className="home__window" x="0.5" y="0.5" transform="translate(30 25)" />
    <rect className="home__trumpet" height="14" width="6" transform="translate(13 9)" />
    <rect className="home__window" x="0.5" y="0.5" transform="translate(14 51)" />
    <rect className="home__window" x="0.5" y="0.5" transform="translate(24 51)" />
    <rect className="home__door" x="0.5" y="0.5" width="17" height="29" transform="translate(42 52)" />
    <rect className="home__door-border" x="0.125" y="0.125" transform="translate(45 55)" />
    <rect className="home__door-border" x="0.125" y="0.125" transform="translate(45 68)" />
    <rect className="home__door-lock" width="1" height="1" rx=".5" transform="translate(57 67)" />
    <path className="home__window-glare" d="M9 1.83333L0 11V9.93056V9.16667L9 0V1.83333Z" transform="translate(15 52)" />
    <path className="home__window-glare" d="M9 1.83333L0 11V9.93056V9.16667L9 0V1.83333Z" transform="translate(15 56)" />
    <path className="home__window-glare" d="M9 1.83333L0 11V9.93056V9.16667L9 0V1.83333Z" transform="translate(25 52)" />
    <path className="home__window-glare" d="M9 1.83333L0 11V9.93056V9.16667L9 0V1.83333Z" transform="translate(25 56)" />
    <path className="home__window-glare" d="M9 1.83333L0 11V9.93056V9.16667L9 0V1.83333Z" transform="translate(31 26)" />
    <path className="home__window-glare" d="M9 1.83333L0 11V9.93056V9.16667L9 0V1.83333Z" transform="translate(31 30)" />
  </svg>
);

HomeIcon.defaultProps = {
  className: null
};

HomeIcon.propTypes = {
  className: PropTypes.string
};

export default HomeIcon;
