import React from 'react';
import ReactDOM from 'react-dom';

import 'react-select/dist/react-select.css';

import { Provider } from 'react-redux';

import PageContainer from './containers';
import { store } from './store';

import '../styles/index.sass';

ReactDOM.render(
  <Provider store={store}>
    <PageContainer />
  </Provider>,
  document.getElementById('root')
);
