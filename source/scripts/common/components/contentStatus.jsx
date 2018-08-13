import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SuccessIcon from './icons/success';
import ErrorIcon from './icons/error';
import SpinnerIcon from './icons/spinner';

import { every } from '../../common/utils/lodash';

import { STATUS_LOADING, STATUS_DEFAULT, STATUS_SUCCESS } from '../../constants/status';

class ContentStatus extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      nameMessage: null,
      nameCircle: null,
      nameSlash: null
    };

    this.iconAfterLoad = this.iconAfterLoad.bind(this);
  }

  componentWillUpdate({ status }) {
    const allRequestsComplete = status.map(element => element === STATUS_SUCCESS);
    const allRequestsDefault = status.map(element => element === STATUS_DEFAULT);

    if (every(allRequestsComplete)) {
      setTimeout(() => this.setState({
        nameMessage: 'messageAppearanceHidden',
        nameCircle: 'iconCircleHidden',
        nameSlash: 'iconSlashHidden'
      }), 2000);
    }

    if (every(allRequestsDefault)) {
      this.setState({
        nameMessage: null,
        nameCircle: null,
        nameSlash: null
      });
    }
  }

  iconAfterLoad(index) {
    const { status } = this.props;
    const { nameCircle, nameSlash } = this.state;

    return (
      status[index] === STATUS_SUCCESS
        ? <div className="info-status__mark"> <SuccessIcon circleHidden={nameCircle} slashHidden={nameSlash} /> </div>
        : <div className="info-status__mark"> <ErrorIcon /> </div>
    );
  }

  render() {
    const { status, message, children } = this.props;
    const { nameMessage } = this.state;

    return (
      <div
        data-status={status[status.length - 1]}
        className={classNames('content-status', { 'content-status__overlay': status[0] !== STATUS_DEFAULT })}
      >
        {children}
        {status.map((statusInfo, index) => {
          if (statusInfo !== STATUS_DEFAULT) {
            return (
              <div key={index} className="content-status__info info-status">
                {message[index] && (
                  <div
                    style={{ animationName: nameMessage }}
                    className="info-status__message"
                    data-status={status[index]}
                  >
                    {message[index]}
                  </div>
                )}

                {status[index] === STATUS_LOADING ? (
                  <div className="info-status__mark"> <SpinnerIcon /> </div>
                ) : this.iconAfterLoad(index)}
              </div>
            );
          }

          return null;
        })}
      </div>
    );
  }
}

ContentStatus.defaultProps = {
  message: ''
};

ContentStatus.propTypes = {
  status: PropTypes.array.isRequired,
  message: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default ContentStatus;
