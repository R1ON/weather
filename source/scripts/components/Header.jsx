import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sun from './sceneObjects/Sun';
import Moon from './sceneObjects/Moon';

import convertTimeIntoPayload from '../utils/scene';

import { isEqual } from '../common/utils/lodash';

class HeaderComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.time, this.props.time);
  }

  render() {
    const { time } = this.props;

    const timeInfo = convertTimeIntoPayload(time);

    return (
      <div className="header__scene scene-object">
        {timeInfo.hasTime && (
          timeInfo.isNight ? (
            <Moon className="scene-object__moon" degree={parseInt(timeInfo.moonDegree, 10)} />
          ) : (
            <Sun className="scene-object__sun" degree={parseInt(timeInfo.sunDegree, 10)} />
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
