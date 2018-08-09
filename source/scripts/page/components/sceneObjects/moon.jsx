import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Moon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: 0
    };
  }

  componentWillUpdate({ degree, secondsPerDegree }) {
    if (!this.state.degree) {
      this.setState({ degree });
    } else {
      setTimeout(() => this.setState(prevState => ({ degree: prevState.degree + 1 })), secondsPerDegree * 1000);
    }
  }

  render() {
    const { className, secondsPerDegree } = this.props;
    const { degree } = this.state;

    return (
      <svg
        width="600"
        style={{ transition: `${this.props.degree === degree ? '2s ease' : (`${secondsPerDegree}s linear`)}` }}
        transform={`rotate(${degree === 0 ? this.props.degree : degree})`}
        height="100"
        viewBox="0 0 350 100"
        fill="none"
        className={className}
      >
        <circle cx="50" cy="50" r="50" fill="#F4E8DC" />
        <path d="M84.5011 73.5496C77.5011 81.5496 62.5011 87.5496 50.0011 87.5496C22.3869 87.5496 -0.183105 65.55 0.00111977 37.5496C0.162311 13.0501 14.8169 1 16.8169 0C14.8169 37.5 42.0011 73.5496 84.5011 73.5496Z" transform="translate(0.183105 12.45)" fill="#C8BBB3" />
        <circle cx="3.5" cy="3.5" r="3" transform="translate(19.5 40.3)" fill="#C8BBB3" stroke="#F4E8DC" />
        <circle cx="4" cy="4" r="3.5" transform="translate(39 54)" fill="#C8BBB3" stroke="#F4E8DC" />
        <circle cx="5.5" cy="5.5" r="5" transform="translate(85 60)" fill="#C8BBB3" stroke="#F4E8DC" />
        <circle cx="6" cy="6" r="5.5" transform="translate(66 38)" fill="#C8BBB3" stroke="#F4E8DC" />
        <circle cx="4.5" cy="4.5" r="4" transform="translate(54 9)" fill="#C8BBB3" stroke="#F4E8DC" />
        <circle cx="10" cy="10" r="9.5" transform="translate(26 13)" fill="#C8BBB3" stroke="#F4E8DC" />
        <circle cx="5" cy="5" r="4.5" transform="translate(57.7 77.7)" fill="#C8BBB3" stroke="#F4E8DC" />
      </svg>
    );
  }
}

Moon.defaultProps = {
  className: null
};

Moon.propTypes = {
  className: PropTypes.string,
  degree: PropTypes.number.isRequired,
  secondsPerDegree: PropTypes.number.isRequired
};

export default Moon;
