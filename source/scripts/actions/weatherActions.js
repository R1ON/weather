import {
  PENDING_DATA,
  GET_WEATHER_DATA,
  GET_GEONAMES_DATA
} from '../constants/types';

import { STATUS_DEFAULT } from '../constants/status';
import { DISPATCH_DEFAULT_TIME } from '../constants/settingsPage';

import geonamesSource from '../sources/geonamesSource';
import weatherSource from '../sources/weatherSource';

function weatherStatus(promise, dispatch) {
  dispatch({ type: PENDING_DATA });

  promise
    .then((response) => {
      dispatch({ type: GET_WEATHER_DATA, response: response.data });

      return response.data;
    })
    .then(response => (
      geonamesSource.getGeonamesByCoords(response.coord.lat, response.coord.lon)
    ))
    .then(({ data, status }) => {
      dispatch({ type: GET_GEONAMES_DATA, response: { data, cod: status } });

      setTimeout(() => dispatch({ type: STATUS_DEFAULT }), DISPATCH_DEFAULT_TIME);
    })
    .catch(({ response }) => {
      dispatch({ type: GET_WEATHER_DATA, response: response.data });

      setTimeout(() => dispatch({ type: STATUS_DEFAULT }), DISPATCH_DEFAULT_TIME);
    });
}

const getWeatherDataByCoordsAction = (latitude, longitude) => (dispatch) => {
  const promise = weatherSource.getWeatherDataByCoords(latitude, longitude);

  weatherStatus(promise, dispatch);
};

const getWeatherDataByCityAction = (city, countryCode) => (dispatch) => {
  const promise = weatherSource.getWeatherDataByCity(city, countryCode);

  weatherStatus(promise, dispatch);
};

export {
  getWeatherDataByCityAction,
  getWeatherDataByCoordsAction
};
