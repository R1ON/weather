import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: 0
    };
  }

  componentWillMount() {
    // Необходимо, чтобы degree сначала был на 0, а спустя время утановилось
    // нормальное значение, иначе анимация на rotate не будет
    setTimeout(() => this.setState({ degree: this.props.degree }), 50);
  }

  componentWillUpdate({ degree }) {
    // Если вводится другой город, необходимо обновить стейт
    if (degree !== this.props.degree) {
      this.setState({ degree });
    }
  }

  render() {
    const { className } = this.props;
    const { degree } = this.state;

    return (
      <svg
        transform={`rotate(${degree})`}
        height="141"
        viewBox={`0 0 ${window.innerWidth * 0.6} 141`}
        fill="none"
        className={className}
      >
        <rect x="1.5" y="1.5" width="97" height="97" transform="translate(20.7107 20.7107)" fill="#FFD550" stroke="#FFE082" strokeWidth="3" />
        <rect x="1.5" y="1.5" width="97" height="97" transform="translate(0 70.7107) rotate(-45)" fill="#FFCA26" stroke="#FFE082" strokeWidth="3" />
        <circle cx="50" cy="50" r="48.5" transform="translate(20.7107 20.7107)" fill="#FFD85F" stroke="#FFE082" strokeWidth="3" />
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
