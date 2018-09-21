import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sun from './sceneObjects/Sun';
import Moon from './sceneObjects/Moon';

import { isEqual, isEmpty } from '../common/utils/lodash';

import {
  SECONDS_PER_DAY,
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
  SEMICIRCLE_DEGREES
} from '../constants/settingsPage';

class HeaderComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.time, this.props.time);
  }

  render() {
    const { time } = this.props;

    const hasTime = !isEmpty(time);

    // Вычисляем восход, закат и текущее время
    const sunrise = hasTime && (SECONDS_PER_HOUR * time.sunrise.hours) + (SECONDS_PER_MINUTE * time.sunrise.minutes);
    const sunset = hasTime && ((SECONDS_PER_HOUR * time.sunset.hours) + (SECONDS_PER_MINUTE * time.sunset.minutes));
    const currentTime = hasTime && ((SECONDS_PER_HOUR * time.hours) + (SECONDS_PER_MINUTE * time.minutes) + time.seconds);

    // Определяем ночь сейчас или день, в зависимости от этого показываем луну или солнце
    const isNight = (currentTime < sunrise || currentTime > sunset);

    // Определяем время солнцестояния и количество секунд за 1градус для луны и солнца
    const solarTime = sunset - sunrise;
    const secondsPerDegreeForSun = solarTime / SEMICIRCLE_DEGREES || 0;
    const secondsPerDegreesForMoon = solarTime && ((SECONDS_PER_DAY - solarTime) / SEMICIRCLE_DEGREES);

    // Определяем количество градусов у солнца, у луны оставляем 0
    let moonDegree = 0;
    const sunDegree = hasTime ? (
      (((SECONDS_PER_HOUR * time.hours) + (SECONDS_PER_MINUTE * time.minutes) + time.seconds) - sunrise) / secondsPerDegreeForSun
    ) : 0;

    // Лунное время до полночи
    if (hasTime && time.hours <= 23 && currentTime > sunset) {
      moonDegree = (currentTime - sunset) / secondsPerDegreesForMoon;
    }

    // Лунное время после полночи
    if (hasTime && currentTime < sunrise) {
      moonDegree = (currentTime + (SECONDS_PER_DAY - sunset)) / secondsPerDegreesForMoon;
    }

    return (
      <div className="header__scene scene-object">
        {hasTime && (
          isNight ? (
            <Moon className="scene-object__moon" degree={parseInt(moonDegree, 10)} />
          ) : (
            <Sun className="scene-object__sun" degree={parseInt(sunDegree, 10)} />
          )
        )}

        <div className="scene-object__short-cloud-top" />
        <div className="scene-object__short-cloud-bottom" />
        <div className="scene-object__long-cloud-top" />

        <div className="scene-object__gray-mountain-left" />
        <div className="scene-object__gray-mountain-right" />
        <div className="scene-object__small-gray-mountain" />
        <div className="scene-object__big-gray-mountain" />

        <div className="scene-object__blue-mountain-1" />
        <div className="scene-object__blue-mountain-2" />
        <div className="scene-object__blue-mountain-3" />
        <div className="scene-object__blue-mountain-4" />

        <div className="scene-object__tree-1" />
        <div className="scene-object__tree-2" />
        <div className="scene-object__tree-3" />
        <div className="scene-object__tree-4" />
        <div className="scene-object__tree-5" />
        <div className="scene-object__tree-6" />
        <div className="scene-object__tree-7" />
        <div className="scene-object__tree-8" />

        <div className="scene-object__home" />

        <div className="scene-object__ground" />
        <div className="scene-object__sea-back" />
        <div className="scene-object__sea-front" />
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
  time: {}
};

HeaderComponent.propTypes = {
  time: PropTypes.object
};

export default HeaderComponent;
