import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ErrorIcon from './icons/error';
import SpinnerIcon from './icons/spinner';

import { STATUS_LOADING, STATUS_DEFAULT, STATUS_SUCCESS } from '../../constants/status';

const ContentStatus = ({ status, message, children }) => {
  const iconAfterLoad = (
    status === STATUS_SUCCESS
      ? <div className="info-status__mark"> <ErrorIcon /> </div> // Success Icon
      : <div className="info-status__mark"> <ErrorIcon /> </div>
  );

  return (
    <div className="content-status">
      <div data-status={status} className={classNames({ 'content-status__overlay': status !== STATUS_DEFAULT })}>
        {children}
        {status !== STATUS_DEFAULT && (
          <div className="content-status__info info-status">
            {message && <div className="info-status__message" data-status={status}>{message}</div>}
            {status === STATUS_LOADING ? <div className="info-status__mark"> <SpinnerIcon /> </div> : iconAfterLoad}
          </div>
        )}
      </div>
    </div>
  );
};

ContentStatus.defaultProps = {
  message: ''
};

ContentStatus.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default ContentStatus;
