import axios from 'axios';

import { APPID, URL_OPEN_WEATHER_MAP, LANGUAGE_DATA } from '../constants/settingsAPI';

export default {
  getWeatherDataByCoords(latitude, longitude) {
    return axios.get(URL_OPEN_WEATHER_MAP, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: APPID,
        lang: LANGUAGE_DATA
      }
    });
  },

  getWeatherDataByCity(city, countryCode) {
    return axios.get(URL_OPEN_WEATHER_MAP, {
      params: {
        q: `${city},${countryCode}`,
        appid: APPID
      }
    });
  }
};
