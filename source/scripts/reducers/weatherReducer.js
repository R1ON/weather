import {
  GET_WEATHER_DATA,
  PENDING_WEATHER_DATA
} from '../constants/types';

import {
  SUCCESS_CODE,
  MESSAGE_SUCCESS_WEATHER,
  MESSAGE_LOADING_WEATHER
} from '../constants/settingsPage';

import {
  STATUS_LOADING,
  STATUS_DEFAULT,
  STATUS_FAILURE,
  STATUS_SUCCESS
} from '../constants/status';

import { get } from '../common/utils/lodash';

const initialState = {
  weatherData: null,
  weatherInfo: {
    code: null,
    status: STATUS_DEFAULT,
    message: null
  }
};

const getWeatherDataReducer = (state = initialState, { type, response }) => {
  const code = get(response, 'cod', null);

  switch (type) {
    case PENDING_WEATHER_DATA:
      return {
        ...state,
        weatherInfo: {
          status: STATUS_LOADING,
          message: MESSAGE_LOADING_WEATHER
        }
      };

    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherInfo: {
          code,
          status: code === SUCCESS_CODE ? STATUS_SUCCESS : STATUS_FAILURE,
          message: code === SUCCESS_CODE ? MESSAGE_SUCCESS_WEATHER : response.message
        },
        weatherData: response
      };

    case STATUS_DEFAULT:
      return {
        ...state,
        weatherInfo: {
          message: null,
          status: STATUS_DEFAULT
        }
      };

    default:
      return state;
  }
};

export default getWeatherDataReducer;
