import React, { Component } from 'react';

import PageContainer from './containers';
import pageReducers from './reducers';

class Page extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageContainer />
    );
  }
}

export {
  Page as default,
  pageReducers
};
