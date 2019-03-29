import React from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import {connect} from "react-redux"
import {useEffect} from "react"
import { handleTestAppSignal } from "./store"
import "../_CSS/app024.css"

// views
import Home from "../Home/widget"
import About from "../About/widget"
import Contact from "../Contact/widget"
// import Login from "../Login/Login"
// import Logout from "../Logout/Logout"


// NavLinks & Routers
const NavLinks = () => {
  return(
    <div className="links">
      <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/contact" className="link">Contact Us</NavLink>
      {/*<NavLink to="/admin" className="link">Admin</NavLink>*/}
    </div>
  )
}

const Routers = () => {
  return (
    <div className="views">
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        {/*<Route path="/admin" render={() => <Admin appState={appState} />} />*/}
        {/*<Route path="/login" render={() => <Login appState={appState} />} />*/}
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    </div>
  )
}

const MainApp = (props) => {
  const {dispatch} = props
  const {msg} = props.componentInfo
  const {counter} = props

  useEffect(
    () => {
      dispatch(handleTestAppSignal())
      return () => {
        console.log("- - - - bye App")
      }
    },[]
  );

  return (
    <div className="App">
      <Router>
        <div>
          <NavLinks />
          <Routers />
          <div>{`${msg} :: ${counter}`}</div>
        </div>
      </Router>
    </div>
  )
}

export default connect((state) => ({...state.stateApp}))(MainApp)
