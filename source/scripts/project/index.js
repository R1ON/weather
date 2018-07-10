import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import FaviconPath from '../../images/favicon.ico';
 
ReactDOM.render(
    <div>
      <Favicon url={FaviconPath} />
      <h1>Hello, weather</h1>
    </div>
  , document.getElementById('root'));