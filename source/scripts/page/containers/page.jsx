import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Form from './form';

import {
  getWeatherDataByCoordsAction,
  getWeatherDataByCityAction
} from '../actions/weatherActions';

import { FORMAT_HOURS } from '../../constants/page';
import ContentStatus from '../../common/components/contentStatus';
import { get } from '../../common/utils/lodash';

class PageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: 'lightgray'
    };
  }

  componentWillMount() {
    const { geolocation } = navigator;
    const { getWeatherDataByCoords } = this.props;

    geolocation.getCurrentPosition(({ coords }) => getWeatherDataByCoords(coords.latitude, coords.longitude));
  }

  componentWillReceiveProps(nextProps) {
    const { weatherData } = nextProps;

    const dateTime = get(weatherData, 'dt', null);

    if (dateTime) {
      const time = moment.unix(dateTime).format(FORMAT_HOURS);

      // console.log(new Date().getTimezoneOffset()/60 * -1)  // -3

      // if (time >= 0 && time < 6) {
      //   this.setState({ background: '#000000' });
      // } else if (time >= 6 && time < 12) {
      //   this.setState({ background: '#fdffb5' });
      // } else if (time >= 12 && time < 18) {
      //   this.setState({ background: '#99fff0' });
      // } else if (time >= 18 && time < 0) {
      //   this.setState({ background: '#783074' });
      // }
    }
  }

  render() {
    const { getWeatherDataByCity, form: { formContainer }, status, message } = this.props;
    const { background } = this.state;

    console.log(this.props);

    return (
      <div className="header" style={{ background }}>
        <ContentStatus status={status} message={message}>
          <Form
            getWeatherDataByCity={getWeatherDataByCity}
            formContainer={formContainer}
          />
        </ContentStatus>
      </div>
    );
  }
}

const mapStateToProps = ({ pageReducers, form }) => {
  const { getWeatherDataReducer } = pageReducers;

  return { ...getWeatherDataReducer, form };
};

const mapDispatchToProps = dispatch => ({
  getWeatherDataByCoords: (latitude, longitude) => dispatch(getWeatherDataByCoordsAction(latitude, longitude)),
  getWeatherDataByCity: city => dispatch(getWeatherDataByCityAction(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
