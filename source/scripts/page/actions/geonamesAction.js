import { GET_GEONAMES_DATA } from '../../constants/types';

import geonamesSource from '../../sources/geonamesSource';

export function getGeonamesByCoordsAction(latitude, longitude) {
  return (dispatch) => {
    const promise = geonamesSource.getGeonamesByCoords(latitude, longitude);

    promise
      .then(({ data }) => dispatch({ type: GET_GEONAMES_DATA, geonamesData: data }));
  };
}
