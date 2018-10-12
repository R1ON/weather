import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherInfoSection extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.weatherData !== nextProps.weatherData;
  }

  render() {
    const { weatherData } = this.props;
    console.log('weatherData', weatherData)

    return (
      <section className="weather-info">
        <div className="weather-info__title">{weatherData ? weatherData.name : 'Выберите город'}</div>
        <div className="weather-info__wind">
          Скорость ветра: {weatherData ? weatherData.wind.speed : '0'} м/с
          <img
            src="images/arrow.png"
            aria-hidden="true"
            style={{ transform: `rotate(${weatherData ? weatherData.wind.deg : 0}deg)` }}
          />
        </div>
      </section>
    );
  }
}

WeatherInfoSection.defaultProps = {
  weatherData: null
};

WeatherInfoSection.propTypes = {
  weatherData: PropTypes.object
};

export default WeatherInfoSection;
