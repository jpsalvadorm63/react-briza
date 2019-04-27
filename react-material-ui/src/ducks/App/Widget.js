import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import TopToolBar from "../TopToolBar/Widget"
import Login from "../Login/Widget"
import Home from "../Landing/Widget"

// Routers
const Routers = () =>(
  <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/login" component={Login} />
    <Route render={() => <h1>404 Error</h1>} />
  </Switch>
)

const App = () => (
  <>
    <Router>
      <TopToolBar />
      <section>
        <Routers />
      </section>
    </Router>
  </>
)

export default App
