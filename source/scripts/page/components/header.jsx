import React, { Component } from 'react';

import HomeIcon from './sceneIcons/home';
import LeftTree from './sceneIcons/trees/leftTree';
import RightTree from './sceneIcons/trees/rightTree';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header__icons icon">
        <LeftTree className="icon__left-tree tree" />
        <HomeIcon className="icon__home home" />
        <RightTree className="icon__right-tree tree" />
      </div>
    );
  }
}

export default HeaderComponent;
