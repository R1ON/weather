import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';

import Favicon from 'react-favicon';

import Page from './page';

import FaviconPath from '../images/favicon.ico';
import '../styles/project/index.sass';

ReactDOM.render(
  <div>
    <Favicon url={FaviconPath} />
    <HashRouter>
      <Route path="/" component={Page} />
    </HashRouter>
  </div>,
  document.getElementById('root')
);
