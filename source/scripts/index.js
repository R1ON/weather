import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import Favicon from 'react-favicon';

import 'react-select/dist/react-select.css';

import { Provider } from 'react-redux';

import Page from './page';
import { store } from './store';

import FaviconPath from '../images/favicon.ico';
import '../styles/index.sass';

ReactDOM.render(
  <div>
    <Favicon url={FaviconPath} />
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={Page} />
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
