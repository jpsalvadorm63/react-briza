import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

// styles
import "../css/app024.css"

// views
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Admin from "./Admin"
import Login from "./Login"
import Reducer from "./Reducer"

// application state
let appState = {
  loggedIn: false,
  login: () => { appState.loggedIn = true },
  logout: () => { appState.loggedIn = false }
}

// NavLinks
const NavLinks = () => {
  return(
    <div className="links">
      <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
      <NavLink to="/about?all=A&nothing=B" className="link">About</NavLink>
      <NavLink to="/reducer" className="link">Reducer</NavLink>
      <NavLink to="/contact" className="link">Contact Us</NavLink>
      <NavLink to="/admin" className="link">Admin</NavLink>
    </div>
  )
}

const Routers = () => {
  return (
    <div className="views">
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/reducer" component={Reducer}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/admin" render={() => <Admin appState={appState} />} />
        <Route path="/login" render={() => <Login appState={appState} />} />
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    </div>
  )
}

// application entry component
const App = () => {
  return(
    <Router>
      <div>
        <NavLinks />
        <Routers />
        <div>Hola ...</div>
      </div>
    </Router>
  )
}

export default App
