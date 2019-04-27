import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import 'semantic-ui-css/semantic.min.css';
import {reducers} from "./COMPONENTS/_APP/reducers"
// import {middlewares} from "src/components/_APP/middlewares"

// import './index.css';
import Login from './COMPONENTS/Login/Widget';
import * as serviceWorker from './serviceWorker';

// const store = createStore(reducers)
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
