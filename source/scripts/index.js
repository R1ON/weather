import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import 'react-select/dist/react-select.css';

import { Provider } from 'react-redux';

import Page from './page';
import { store } from './store';

import '../styles/index.sass';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={Page} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
