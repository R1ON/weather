import {
  GET_WEATHER_DATA,
  PENDING_WEATHER_DATA,
  SUCCESS_CODE,
  MESSAGE_LOADING,
  MESSAGE_SUCCESS
} from '../../constants/page';

import {
  STATUS_LOADING,
  STATUS_DEFAULT,
  STATUS_FAILURE,
  STATUS_SUCCESS
} from '../../constants/status';

import { get } from '../../common/utils/lodash';

const initialState = {
  code: null,
  status: STATUS_DEFAULT,
  message: null,
  weatherData: null
};

export function getWeatherDataReducer(state = initialState, { type, response }) {
  const code = get(response, 'cod', null);

  switch (type) {
    case PENDING_WEATHER_DATA:
      return {
        ...state,
        status: STATUS_LOADING,
        message: MESSAGE_LOADING
      };

    case GET_WEATHER_DATA:
      return {
        ...state,
        code,
        status: code === SUCCESS_CODE ? STATUS_SUCCESS : STATUS_FAILURE,
        message: code === SUCCESS_CODE ? MESSAGE_SUCCESS : response.message,
        weatherData: code === SUCCESS_CODE ? response : null
      };

    default:
      return {
        ...state,
        status: STATUS_DEFAULT,
        message: null
      };
  }
}
