import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Form from './Form';
import HeaderWrapper from './HeaderWrapper';

import { get } from '../common/utils/lodash';
import ContentStatus from '../common/components/ContentStatus';

import {
  getWeatherDataByCoordsAction,
  getWeatherDataByCityAction
} from '../actions/weatherActions';

import HeaderComponent from '../components/Header';

class PageContainer extends Component {
  componentWillMount() {
    const { geolocation } = navigator;
    const { getWeatherDataByCoords } = this.props;

    geolocation.getCurrentPosition(({ coords }) => getWeatherDataByCoords(coords.latitude, coords.longitude));
  }

  componentWillReceiveProps({ weatherData, geonamesData }) {
    const nextCityName = get(weatherData, 'name', null);

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
    const { getWeatherDataByCity, weatherInfo, weatherData } = this.props;
    const code = get(weatherData, 'cod', null);

    return (
      <ContentStatus status={weatherInfo.status} message={weatherInfo.message}>
        <HeaderWrapper code={code} className="header" time={this.time}>
          <HeaderComponent time={this.time} />
          <Form
            code={code}
            status={[weatherInfo.status]}
            getWeatherDataByCity={getWeatherDataByCity}
          />
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
  weatherInfo: PropTypes.object.isRequired,
  weatherData: PropTypes.object,
  geonamesData: PropTypes.object
};

const mapStateToProps = ({ weatherData }) => (
  { ...weatherData }
);

const mapDispatchToProps = dispatch => ({
  getWeatherDataByCoords: (latitude, longitude) => dispatch(getWeatherDataByCoordsAction(latitude, longitude)),
  getWeatherDataByCity: (city, countryCode) => dispatch(getWeatherDataByCityAction(city, countryCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
