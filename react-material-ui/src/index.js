import React from 'react'
import ReactDOM from 'react-dom'
import App from 'src/ducks/App'
import * as serviceWorker from 'src/serviceWorker'

ReactDOM.render(
  <App/>, document.getElementById('root')
)

serviceWorker.unregister()
