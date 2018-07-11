import React, { Component } from 'react';

class Page extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="header">
        test
      </div>
    );
  }
}

export {
  Page as default
};
