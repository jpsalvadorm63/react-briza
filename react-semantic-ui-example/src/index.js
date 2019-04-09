import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import Widget from './Login/Widget';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Widget />,
  document.getElementById('root')
);

serviceWorker.unregister();
