import axios from 'axios';

import { USERNAME, URL_GEONAMES, LANGUAGE_DATA } from '../constants/settingsAPI';

export default {
  getGeonamesByCoords(latitude, longitude) {
    return axios.get(URL_GEONAMES, {
      params: {
        lat: latitude,
        lng: longitude,
        username: USERNAME,
        lang: LANGUAGE_DATA
      }
    });
  }
};
