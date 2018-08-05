import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: 0
    };
  }

  componentWillUpdate({ degree, secondsPerDegree }) {
    if (!this.state.degree) {
      this.setState({ degree: parseInt(degree, 10) });
    } else {
      setTimeout(() => this.setState(prevState => ({ degree: prevState.degree + 1 })), secondsPerDegree * 1000);
    }
  }

  render() {
    const { className } = this.props;
    const { degree } = this.state;

    return (
      <svg width="600" transform={`rotate(${degree === 0 ? this.props.degree : degree})`} height="141" viewBox="0 0 600 141" fill="none" className={className}>
        <g>
          <rect x="1.5" y="1.5" width="97" height="97" transform="translate(20.7107 20.7107)" fill="#FFD550" stroke="#FFE082" strokeWidth="3" />
          <rect x="1.5" y="1.5" width="97" height="97" transform="translate(0 70.7107) rotate(-45)" fill="#FFCA26" stroke="#FFE082" strokeWidth="3" />
          <circle cx="50" cy="50" r="48.5" transform="translate(20.7107 20.7107)" fill="#FFD85F" stroke="#FFE082" strokeWidth="3" />
        </g>
      </svg>
    );
  }
}

Sun.defaultProps = {
  className: null
};

Sun.propTypes = {
  className: PropTypes.string,
  degree: PropTypes.number.isRequired
};

export default Sun;
