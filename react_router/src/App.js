import React, {
  useState,
  useEffect
} from "react"
import {
  applyMiddleware,
  combineReducers,
  createStore
} from "redux"
import { Provider } from 'react-redux'
import App0 from "./App024/App024"

const middleware = applyMiddleware()
const reducers = combineReducers({})
const store = createStore(middleware, reducers);

const App = () => {
  const [appStarted, setAppStarted] = useState(false)

  useEffect(() => {
    console.log("00 ==> ", appStarted)
    if(!appStarted) setAppStarted(true)
    return function cleanup() {
      setAppStarted(true)
      console.log("99 ==> ", appStarted)
    };
  })

  return(
    <Provider store={store}>
      <App0 />
    </Provider>
  )
}

export default App
