import { combineReducers } from 'redux';

import { getWeatherDataReducer } from './weatherReducer';
import { getGeonamesDataReducer } from './geonamesReducer';

export default combineReducers({
  getWeatherDataReducer,
  getGeonamesDataReducer
});
