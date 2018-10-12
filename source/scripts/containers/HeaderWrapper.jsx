import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';

import { isEqual } from '../common/utils/lodash';
import { SUCCESS_CODE } from '../constants/settingsPage';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#eaeaea'
    };
  }

  componentWillReceiveProps({ time: { hours } }) {
    if (hours !== this.props.time.hours) {
      // оверлей наслаивается на фон, получается ужасный переход
      // делать анимацию после того, как статус стал DEFAULT
      // или что-нибудь сделать с оверлеем, из-за него все очень плохо
      if (hours >= 0 && hours < 6) {
        this.setState({ background: '#030f19' });
      } else if (hours >= 6 && hours < 12) {
        this.setState({ background: '#df9559' });
      } else if (hours >= 12 && hours < 18) {
        this.setState({ background: '#3677c3' });
      } else if (hours >= 18 && hours < 24) {
        this.setState({ background: '#871263' });
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.time, this.props.time) || nextProps.code !== SUCCESS_CODE;
  }

  render() {
    const { background } = this.state;
    const { children, className, status, code, time } = this.props;

    return (
      <header className={className} style={{ background }}>
        {Children.map(children, element => (
          cloneElement(element, { status, code, time })
        ))}
      </header>
    );
  }
}

HeaderContainer.defaultProps = {
  className: null,
  time: {},
  status: null,
  code: null
};

HeaderContainer.propTypes = {
  time: PropTypes.object,
  status: PropTypes.string,
  code: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default HeaderContainer;
