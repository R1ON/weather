import { combineReducers } from 'redux';

import weatherDataReducer from './weatherReducers';

export default combineReducers({
  weatherData: weatherDataReducer
});
