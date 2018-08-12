import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from '../reducers';

// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(RootReducer, applyMiddleware(thunk));

export {
  store
};
