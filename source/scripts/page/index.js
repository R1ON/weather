import React, { Component } from 'react';

import PageContainer from './containers/page';
import pageReducers from './reducers';

class Page extends Component {
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="header">
        <PageContainer />
      </div>
    );
  }
}

export {
  Page as default,
  pageReducers
};
