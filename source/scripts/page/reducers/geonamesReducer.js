import {
  GET_GEONAMES_DATA,
  PENDING_GEONAMES_DATA
} from '../../constants/types';

import {
  MESSAGE_LOADING_GEONAMES,
  MESSAGE_SUCCESS_GEONAMES
} from '../../constants/settingsPage';

import {
  STATUS_DEFAULT,
  STATUS_LOADING,
  STATUS_SUCCESS
} from '../../constants/status';

const initialState = {
  geonamesData: null,
  geonamesInfo: {
    code: null,
    status: STATUS_DEFAULT,
    message: null
  }
};

export function getGeonamesDataReducer(state = initialState, { type, geonamesData }) {
  switch (type) {
    case PENDING_GEONAMES_DATA:
      return {
        ...state,
        geonamesInfo: {
          status: STATUS_LOADING,
          message: MESSAGE_LOADING_GEONAMES
        }
      };

    case GET_GEONAMES_DATA:
      return {
        ...state,
        geonamesInfo: {
          status: STATUS_SUCCESS,
          message: MESSAGE_SUCCESS_GEONAMES
        },
        geonamesData
      };

    case STATUS_DEFAULT:
      return {
        ...state,
        geonamesInfo: {
          message: null,
          status: STATUS_DEFAULT
        }
      };

    default:
      return state;
  }
}
