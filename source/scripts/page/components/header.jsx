import React, { Component } from 'react';

import GrayMountain from './sceneObjects/grayMountain';
import BigDarkMountain from './sceneObjects/bigDarkMountain';
import SmallDarkMountain from './sceneObjects/smallDarkMountain';
import BlueMountain from './sceneObjects/blueMountain';

import Tree from './sceneObjects/tree';
import Home from './sceneObjects/home';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header__scene scene-object">
        <div className="scene-object__short-cloud-top" />
        <div className="scene-object__short-cloud-bottom" />
        <div className="scene-object__long-cloud-top" />
        <div className="scene-object__long-cloud-bottom" />

        <div className="scene-object__ground" />
        <div className="scene-object__sea-back" />
        <div className="scene-object__sea-front" />

        <GrayMountain className="scene-object__gray-mountain-left" />
        <GrayMountain className="scene-object__gray-mountain-right" />
        <SmallDarkMountain className="scene-object__small-dark-mountain" />
        <BigDarkMountain className="scene-object__big-dark-mountain" />
        <BlueMountain className="scene-object__blue-montain-1" />
        <BlueMountain className="scene-object__blue-montain-2" />
        <BlueMountain className="scene-object__blue-montain-3" />
        <BlueMountain className="scene-object__blue-montain-4" />


        <Tree className="scene-object__tree-1" />
        <Tree className="scene-object__tree-2" />
        <Tree className="scene-object__tree-3" />
        <Tree className="scene-object__tree-4" />
        <Tree className="scene-object__tree-5" />
        <Tree className="scene-object__tree-6" />
        <Tree className="scene-object__tree-7" />
        <Tree className="scene-object__tree-8" />

        <Home className="scene-object__home" />
      </div>
    );
  }
}

export default HeaderComponent;
