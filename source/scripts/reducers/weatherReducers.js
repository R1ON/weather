import { get } from '../common/utils/lodash';

import {
  PENDING_DATA,
  GET_WEATHER_DATA,
  GET_GEONAMES_DATA
} from '../constants/types';

import {
  SUCCESS_CODE,
  MESSAGE_LOADING,
  MESSAGE_SUCCESS
} from '../constants/settingsPage';

import {
  STATUS_LOADING,
  STATUS_DEFAULT,
  STATUS_FAILURE,
  STATUS_SUCCESS
} from '../constants/status';


const initialState = {
  weatherData: null,
  geonamesData: null,
  weatherInfo: {
    code: null,
    status: STATUS_DEFAULT,
    message: null
  }
};

const weatherDataReducer = (state = initialState, { type, response }) => {
  const code = get(response, 'cod', null);

  switch (type) {
    case PENDING_DATA:
      return {
        ...state,
        weatherInfo: {
          status: STATUS_LOADING,
          message: MESSAGE_LOADING
        }
      };

    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: response
      };

    case GET_GEONAMES_DATA:
      return {
        ...state,
        weatherInfo: {
          code,
          status: code === SUCCESS_CODE ? STATUS_SUCCESS : STATUS_FAILURE,
          message: code === SUCCESS_CODE ? MESSAGE_SUCCESS : response.message
        },
        geonamesData: response.data
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

export default weatherDataReducer;
