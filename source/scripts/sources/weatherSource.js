import axios from 'axios';

import { APPID, URL_OPEN_WEATHER_MAP } from '../constants/page';

export default {
  getWeatherData() {
    return axios.get(URL_OPEN_WEATHER_MAP, {
      params: {
        id: '524901',
        appid: APPID
      }
    });
  }
};
