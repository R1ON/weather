import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ className }) => (
  <svg width="500" height="305" viewBox="0 0 500 305" fill="none" className={className}>
    <rect width="379" height="190" transform="translate(60 115)" fill="#CBAB89" />
    <rect width="379" height="26" transform="translate(60 115)" fill="#A3886B" />
    <rect width="63" height="111" transform="translate(330 194)" fill="#89725A" />
    <rect width="63" height="57" transform="translate(208 194)" fill="#627E88" />
    <rect width="63" height="57" transform="translate(122 194)" fill="#627E88" />
    <path d="M50 0H450L500 115H0L50 0Z" fill="#FC5C20" />
  </svg>
);

Home.defaultProps = {
  className: null
};

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
