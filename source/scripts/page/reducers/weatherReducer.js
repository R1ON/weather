import {
  GET_WEATHER_DATA
} from '../../constants/page';

export function getWeatherDataReducer(state = {}, { type, response }) {
  switch (type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        response
      };

    default:
      return state;
  }
}
