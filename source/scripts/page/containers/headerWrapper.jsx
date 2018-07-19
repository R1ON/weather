import React, { Component } from 'react';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#ffff77'
    };
  }

  componentWillReceiveProps({ time }) {
    if (time !== this.props.time) {
      // делать анимацию после того, как статус стал DEFAULT
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
    const { children } = this.props;
    const { background } = this.state;

    return (
      <header style={{ background }}>
        {children}
      </header>
    );
  }
}

export default HeaderContainer;
