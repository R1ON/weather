import { GET_WEATHER_DATA, PENDING_WEATHER_DATA } from '../../constants/types';
import { DISPATCH_DEFAULT_TIME } from '../../constants/settingsPage';
import { STATUS_DEFAULT } from '../../constants/status';

import weatherSource from '../../sources/weatherSource';

function weatherStatus(promise, dispatch) {
  dispatch({ type: PENDING_WEATHER_DATA });

  promise
    .then(({ data }) => {
      dispatch({ type: GET_WEATHER_DATA, response: data });
      setTimeout(() => dispatch({ type: STATUS_DEFAULT }), DISPATCH_DEFAULT_TIME);
    })
    .catch(({ response: { data } }) => {
      dispatch({ type: GET_WEATHER_DATA, response: data });
      setTimeout(() => dispatch({ type: STATUS_DEFAULT }), DISPATCH_DEFAULT_TIME);
    });
}

export function getWeatherDataByCoordsAction(latitude, longitude) {
  return (dispatch) => {
    const promise = weatherSource.getWeatherDataByCoords(latitude, longitude);

    weatherStatus(promise, dispatch);
  };
}

export function getWeatherDataByCityAction(city, countryCode) {
  return (dispatch) => {
    const promise = weatherSource.getWeatherDataByCity(city, countryCode);

    weatherStatus(promise, dispatch);
  };
}
