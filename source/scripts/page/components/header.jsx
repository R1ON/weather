import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GrayMountain from './sceneObjects/grayMountain';
import BigDarkMountain from './sceneObjects/bigDarkMountain';
import SmallDarkMountain from './sceneObjects/smallDarkMountain';
import BlueMountain from './sceneObjects/blueMountain';

import Tree from './sceneObjects/tree';
import Home from './sceneObjects/home';
import Sun from './sceneObjects/sun';
import Moon from './sceneObjects/moon';

import { isEqual } from '../../common/utils/lodash';
import {
  SECONDS_PER_DAY,
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
  SEMICIRCLE_DEGREES
} from '../../constants/settingsPage';

class HeaderComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.time, this.props.time);
  }

  render() {
    const { time } = this.props;

    // Вычисляем восход, закат и текущее время
    const sunrise = time && (SECONDS_PER_HOUR * time.sunrise.hours) + (SECONDS_PER_MINUTE * time.sunrise.minutes);
    const sunset = time && ((SECONDS_PER_HOUR * time.sunset.hours) + (SECONDS_PER_MINUTE * time.sunset.minutes));
    const currentTime = time && ((SECONDS_PER_HOUR * time.hours) + (SECONDS_PER_MINUTE * time.minutes) + time.seconds);

    // Определяем ночь сейчас или день, в зависимости от этого показываем луну или солнце
    const isNight = (currentTime < sunrise || currentTime > sunset);

    // Определяем время солнцестояния и количество секунд за 1градус для луны и солнца
    const solarTime = sunset - sunrise;
    const secondsPerDegreeForSun = solarTime / SEMICIRCLE_DEGREES || 0;
    const secondsPerDegreesForMoon = solarTime && ((SECONDS_PER_DAY - solarTime) / SEMICIRCLE_DEGREES);

    // Определяем количество градусов у солнца, у луны оставляем 0
    let moonDegree = 0;
    const sunDegree = time ? (
      (((SECONDS_PER_HOUR * time.hours) + (SECONDS_PER_MINUTE * time.minutes) + time.seconds) - sunrise) / secondsPerDegreeForSun
    ) : 0;

    // Лунное время до полночи
    if (time && time.hours <= 23 && currentTime > sunset) {
      moonDegree = (currentTime - sunset) / secondsPerDegreesForMoon;
    }

    // Лунное время после полночи
    if (time && currentTime < sunrise) {
      moonDegree = (currentTime + (SECONDS_PER_DAY - sunset)) / secondsPerDegreesForMoon;
    }

    return (
      <div className="header__scene scene-object">
        {time && (
          isNight ? (
            <Moon className="scene-object__moon" degree={parseInt(moonDegree, 10)} />
          ) : (
            <Sun className="scene-object__sun" degree={parseInt(sunDegree, 10)} />
          )
        )}

        {/*<div className="scene-object__short-cloud-top" />*/}
        {/*<div className="scene-object__short-cloud-bottom" />*/}
        {/*<div className="scene-object__long-cloud-top" />*/}

        {/*<GrayMountain className="scene-object__gray-mountain-left" />*/}
        {/*<GrayMountain className="scene-object__gray-mountain-right" />*/}
        {/*<SmallDarkMountain className="scene-object__small-dark-mountain" />*/}
        {/*<BigDarkMountain className="scene-object__big-dark-mountain" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-1" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-2" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-3" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-4" />*/}

        {/*<Tree className="scene-object__tree-1" />*/}
        {/*<Tree className="scene-object__tree-2" />*/}
        {/*<Tree className="scene-object__tree-3" />*/}
        {/*<Tree className="scene-object__tree-4" />*/}
        {/*<Tree className="scene-object__tree-5" />*/}
        {/*<Tree className="scene-object__tree-6" />*/}
        {/*<Tree className="scene-object__tree-7" />*/}
        {/*<Tree className="scene-object__tree-8" />*/}
        {/**/}
        {/*<Home className="scene-object__home" />*/}

        <div className="scene-object__ground" />
        <div className="scene-object__sea-back" />
        <div className="scene-object__sea-front" />
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
  time: null
};

HeaderComponent.propTypes = {
  time: PropTypes.object
};

export default HeaderComponent;
