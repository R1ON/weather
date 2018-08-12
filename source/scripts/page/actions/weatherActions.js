import { GET_WEATHER_DATA, PENDING_WEATHER_DATA } from '../../constants/types';

import weatherSource from '../../sources/weatherSource';

function weatherStatus(promise, dispatch) {
  dispatch({ type: PENDING_WEATHER_DATA });

  promise
    .then(({ data }) => {
      dispatch({ type: GET_WEATHER_DATA, response: data });
    })
    .catch(({ response: { data } }) => {
      dispatch({ type: GET_WEATHER_DATA, response: data });
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
