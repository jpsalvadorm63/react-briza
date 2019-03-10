import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App024/App024'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
