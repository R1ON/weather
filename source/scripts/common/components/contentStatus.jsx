import React from 'react';
import classNames from 'classnames';

import { STATUS_LOADING, STATUS_DEFAULT } from '../../constants/status';

const ContentStatus = ({ status, message, className, children }) => (
  <div className={classNames(className, { 'content-status-overlay': status !== STATUS_DEFAULT })}>
    {children}
    {status !== STATUS_DEFAULT && (
      <div className="content-status">
        {message && <div className="content-status-message">{message}</div>}
        {status === STATUS_LOADING ? <div className="content-status-spinner" /> : <div className="content-status-mark" />}
      </div>
    )}
  </div>
);

export default ContentStatus;
