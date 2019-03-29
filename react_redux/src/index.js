import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/_APP/widget'
import * as serviceWorker from './serviceWorker'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {reducers} from "./components/_APP/reducers"
import {middlewares} from "./components/_APP/middlewares"
import {handleTestAppSignal} from "./components/_APP/store"

const store = createStore(reducers, middlewares)

const MainApp = (store) => {
  store.dispatch(handleTestAppSignal())
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(MainApp(store), document.getElementById('root'))

serviceWorker.unregister();
