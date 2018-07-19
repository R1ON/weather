import React from 'react';

const HomeIcon = () => (
  <svg viewBox="0 0 72 103" className="icon-home">
    <g>
      <rect className="icon-home__left-foundation" />
      <rect className="icon-home__right-foundation" />
      <path d="M0 30L30 0L60 30H30H0Z" className="icon-home__left-roof" />
      <path d="M30 0V30H0L30 0Z" className="icon-home__right-roof" />
      <rect className="icon-home__upper-left-window" />
      <rect className="icon-home__upper-right-window" />
      <rect className="icon-home__lower-left-window" />
      <rect className="icon-home__lower-right-window" />
      <path d="M36 6L6 36H0L6 30L36 0L40.5 4.5L38 8L36 6Z" className="icon-home__left-coating" />
      <path d="M30 6L0 36V32.5V30L30 0V6Z" className="icon-home__left-shadow" />
      <path d="M0 6V0L30 30L36 36H30L0 6Z" className="icon-home__right-coating" />
      <path d="M0 6V0L30 30V33V36L0 6Z" className="icon-home__right-shadow" />
      <rect className="icon-home__trumpet" />
      <rect className="icon-home__smoke-small" />
      <rect className="icon-home__smoke-middle" />
      <rect className="icon-home__smoke-big" />
    </g>
  </svg>
);

export default HomeIcon;
