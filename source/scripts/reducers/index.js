import { combineReducers } from 'redux';

import getWeatherDataReducer from './geonamesReducer';
import getGeonamesDataReducer from './weatherReducer';

export default combineReducers({
  getWeatherData: getWeatherDataReducer,
  getGeonamesData: getGeonamesDataReducer
});
