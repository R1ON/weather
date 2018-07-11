import {
  GET_WEATHER_DATA
} from '../../constants/page';

import weatherSource from '../../sources/weatherSource';

export function getWeatherDataAction() {
  return (dispatch) => {
    const promise = weatherSource.getWeatherData();

    promise.then(response => dispatch({ type: GET_WEATHER_DATA, response }));
  };
}
