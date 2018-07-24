import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import moment from 'moment';

import Form from './form';
import HeaderWrapper from './headerWrapper';

import {
  getWeatherDataByCoordsAction,
  getWeatherDataByCityAction
} from '../actions/weatherActions';

import { getGeonamesByCoordsAction } from '../actions/geonamesAction';

import HeaderComponent from '../components/header';

import { FORMAT_HOURS } from '../../constants/settingsPage';
import ContentStatus from '../../common/components/contentStatus';
import { get } from '../../common/utils/lodash';

class PageContainer extends Component {
  constructor(props) {
    super(props);

    this.time = '-1';
  }

  componentWillMount() {
    const { geolocation } = navigator;
    const { getWeatherDataByCoords } = this.props;

    geolocation.getCurrentPosition(({ coords }) => getWeatherDataByCoords(coords.latitude, coords.longitude));
  }

  componentWillReceiveProps(nextProps) {
    const { weatherData, geonamesData, getGeonamesByCoords } = nextProps;

    const nextCityName = get(nextProps.weatherData, 'name', null);
    const prevCityName = get(this.props.weatherData, 'name', null);

    if (prevCityName !== nextCityName) {
      const coords = get(weatherData, 'coord', null);

      if (coords) {
        getGeonamesByCoords(coords.lat, coords.lon);
      }
    }

    if (!geonamesData) {
      const dateTime = get(weatherData, 'dt', null);

      if (dateTime) {
        this.time = moment.unix(dateTime).format(FORMAT_HOURS);
      }
    } else {
      this.time = moment(geonamesData.time).format(FORMAT_HOURS);
    }
  }

  render() {
    const { getWeatherDataByCity, status, message } = this.props;

    return (
      <ContentStatus status={status} message={message}>
        <HeaderWrapper className="header" time={this.time}>
          <Form getWeatherDataByCity={getWeatherDataByCity} />
          <HeaderComponent />
        </HeaderWrapper>
      </ContentStatus>
    );
  }
}

PageContainer.defaultProps = {
  message: null,
  weatherData: null,
  geonamesData: null
};

PageContainer.propTypes = {
  getWeatherDataByCity: PropTypes.func.isRequired,
  getWeatherDataByCoords: PropTypes.func.isRequired,
  getGeonamesByCoords: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string,
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
