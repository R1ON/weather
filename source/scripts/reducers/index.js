import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { pageReducers } from '../page';

export default combineReducers({
  pageReducers,
  form: formReducer
});
