import { GET_WEATHER_DATA, PENDING_WEATHER_DATA } from '../constants/types';
import { STATUS_DEFAULT } from '../constants/status';
import { DISPATCH_DEFAULT_TIME } from '../constants/settingsPage';

import weatherSource from '../sources/weatherSource';

function weatherStatus(promise, dispatch) {
  dispatch({ type: PENDING_WEATHER_DATA });

  promise
    .then(({ data }) => {
      dispatch({ type: GET_WEATHER_DATA, response: data });
    })
    .catch(({ response: { data } }) => {
      dispatch({ type: GET_WEATHER_DATA, response: data });
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
  getWeatherDataByCoordsAction,
  getWeatherDataByCityAction
};
