import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {MuiThemeProvider} from "@material-ui/core/styles";
import * as serviceWorker from 'src/serviceWorker'
import theme from 'src/ui/theme'

//////
import {
  reducers,
  middlewares
} from "./reducers"
import CssBaseline from '@material-ui/core/CssBaseline'
import App from 'src/ducks/App'

const store = createStore(reducers, middlewares)

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App/>
    </MuiThemeProvider>
  </Provider>, document.getElementById('root')
)

serviceWorker.unregister()