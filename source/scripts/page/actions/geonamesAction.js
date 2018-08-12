import {
  GET_GEONAMES_DATA,
  PENDING_GEONAMES_DATA
} from '../../constants/types';
import { STATUS_DEFAULT } from '../../constants/status';
import { DISPATCH_DEFAULT_TIME } from '../../constants/settingsPage';

import geonamesSource from '../../sources/geonamesSource';

export function getGeonamesByCoordsAction(latitude, longitude) {
  return (dispatch) => {
    const promise = geonamesSource.getGeonamesByCoords(latitude, longitude);
    dispatch({ type: PENDING_GEONAMES_DATA });

    promise
      .then(({ data }) => {
        dispatch({ type: GET_GEONAMES_DATA, geonamesData: data });
        setTimeout(() => dispatch({ type: STATUS_DEFAULT }), DISPATCH_DEFAULT_TIME);
      });
  };
}
