import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Form from './form';
import HeaderWrapper from './headerWrapper';

import { get } from '../../common/utils/lodash';
import ContentStatus from '../../common/components/contentStatus';

import {
  getWeatherDataByCoordsAction,
  getWeatherDataByCityAction
} from '../actions/weatherActions';

import { getGeonamesByCoordsAction } from '../actions/geonamesAction';

import HeaderComponent from '../components/header';

class PageContainer extends Component {
  componentWillMount() {
    const { geolocation } = navigator;
    const { getWeatherDataByCoords } = this.props;

    geolocation.getCurrentPosition(({ coords }) => getWeatherDataByCoords(coords.latitude, coords.longitude));
  }

  componentWillReceiveProps({ weatherData, geonamesData, getGeonamesByCoords }) {
    const nextCityName = get(weatherData, 'name', null);
    const prevCityName = get(this.props.weatherData, 'name', null);

    if (prevCityName !== nextCityName) {
      const coords = get(weatherData, 'coord', null);

      if (coords) {
        getGeonamesByCoords(coords.lat, coords.lon);
      }
    }

    if (!geonamesData && !nextCityName) {
      const dateTime = get(weatherData, 'dt', null);

      if (dateTime) {
        this.time = moment.unix(dateTime).toObject();
      }
    }

    if (geonamesData) {
      this.time = {
        ...moment(geonamesData.time).toObject(),
        sunrise: moment(geonamesData.sunrise).toObject(),
        sunset: moment(geonamesData.sunset).toObject()
      };
    }
  }

  render() {
    const { getWeatherDataByCity, weatherInfo, geonamesInfo } = this.props;

    return (
      <ContentStatus
        status={[weatherInfo.status, geonamesInfo.status]}
        message={[weatherInfo.message, geonamesInfo.message]}
      >
        <HeaderWrapper className="header" time={this.time}>
          <HeaderComponent time={this.time} />
          <Form getWeatherDataByCity={getWeatherDataByCity} />
        </HeaderWrapper>
      </ContentStatus>
    );
  }
}

PageContainer.defaultProps = {
  weatherData: null,
  geonamesData: null
};

PageContainer.propTypes = {
  getWeatherDataByCity: PropTypes.func.isRequired,
  getWeatherDataByCoords: PropTypes.func.isRequired,
  getGeonamesByCoords: PropTypes.func.isRequired,
  weatherInfo: PropTypes.object.isRequired,
  geonamesInfo: PropTypes.object.isRequired,
  weatherData: PropTypes.object,
  geonamesData: PropTypes.object
};

const mapStateToProps = ({ pageReducers }) => {
  const { getWeatherDataReducer, getGeonamesDataReducer } = pageReducers;

  return { ...getWeatherDataReducer, ...getGeonamesDataReducer };
};

const mapDispatchToProps = dispatch => ({
  getWeatherDataByCoords: (latitude, longitude) => dispatch(getWeatherDataByCoordsAction(latitude, longitude)),
  getWeatherDataByCity: (city, countryCode) => dispatch(getWeatherDataByCityAction(city, countryCode)),
  getGeonamesByCoords: (latitude, longitude) => dispatch(getGeonamesByCoordsAction(latitude, longitude))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
