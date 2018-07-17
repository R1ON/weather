import { GET_GEONAMES_DATA } from '../../constants/types';

const initialState = {
  geonamesData: null
};

export function getGeonamesDataReducer(state = initialState, { type, geonamesData }) {
  switch (type) {
    case GET_GEONAMES_DATA:
      return {
        ...state,
        geonamesData
      };

    default:
      return state;
  }
}
