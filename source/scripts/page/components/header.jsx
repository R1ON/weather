import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GrayMountain from './sceneObjects/grayMountain';
import BigDarkMountain from './sceneObjects/bigDarkMountain';
import SmallDarkMountain from './sceneObjects/smallDarkMountain';
import BlueMountain from './sceneObjects/blueMountain';

import Tree from './sceneObjects/tree';
import Home from './sceneObjects/home';
import Sun from './sceneObjects/sun';

import { isEqual } from '../../common/utils/lodash';
import { SECONDS_PER_HOUR, SECONDS_PER_MINUTE } from '../../constants/settingsPage';

class HeaderComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.time, this.props.time);
  }

  render() {
    const { time } = this.props;

    // (time.hours - 6) потому что восход начинается в 6:00
    // Необходимо получить количество секунд, минуя часы до восхода
    // 240 - это количество секунд за 1 градус => узнаем текущий поворот
    const degree = time ? (
      ((SECONDS_PER_HOUR * (time.hours - 6)) + (SECONDS_PER_MINUTE * time.minutes) + time.seconds) / 240
    ) : 0;

    return (
      <div className="header__scene scene-object">
        {/*<div className="scene-object__short-cloud-top" />*/}
        {/*<div className="scene-object__short-cloud-bottom" />*/}
        {/*<div className="scene-object__long-cloud-top" />*/}

        <div className="scene-object__ground" />
        <div className="scene-object__sea-back" />
        <div className="scene-object__sea-front" />

        {/*<GrayMountain className="scene-object__gray-mountain-left" />*/}
        {/*<GrayMountain className="scene-object__gray-mountain-right" />*/}
        {/*<SmallDarkMountain className="scene-object__small-dark-mountain" />*/}
        {/*<BigDarkMountain className="scene-object__big-dark-mountain" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-1" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-2" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-3" />*/}
        {/*<BlueMountain className="scene-object__blue-montain-4" />*/}
        {/**/}
        {/**/}
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
        <Sun className="scene-object__sun" degree={degree} />
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
