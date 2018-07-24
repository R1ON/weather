import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#eaeaea'
    };
  }

  componentWillReceiveProps({ time }) {
    if (time !== this.props.time) {
      // делать анимацию после того, как статус стал DEFAULT
      // или что-нибудь сделать с оверлеем, из-за него все очень плохо
      if (time >= 0 && time < 6) {
        this.setState({ background: '#030f19' });
      } else if (time >= 6 && time < 12) {
        this.setState({ background: '#df9559' });
      } else if (time >= 12 && time < 18) {
        this.setState({ background: '#3677c3' });
      } else if (time >= 18 && time < 24) {
        this.setState({ background: '#cf538d' });
      }
    }
  }

  render() {
    const { children, className } = this.props;
    const { background } = this.state;

    return (
      <header className={className} style={{ background }}>
        {children}
      </header>
    );
  }
}

HeaderContainer.defaultProps = {
  className: null
};

HeaderContainer.propTypes = {
  time: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default HeaderContainer;
