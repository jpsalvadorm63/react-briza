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
import LoginForm from "../LoginForm/widget"


// NavLinks & Routers
const NavLinks = (props) => {
  return(
    <div className="links">
      <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/contact" className="link">Contact Us</NavLink>
      {
        props.lgnInf.email.length > 0 ?
        <span><NavLink to="/Login" className="link">Logout</NavLink> {props.lgnInf.email}</span>:
        <NavLink to="/Login" className="link">Login</NavLink>
      }
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
        <Route path="/login" component={LoginForm}/>
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    </div>
  )
}

const MainApp = (props) => {
  const {dispatch, counter, lgnInf} = props
  const {msg} = props.componentInfo

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
          <NavLinks lgnInf={lgnInf}/>
          <Routers />
          <div>{`${msg} :: ${counter}`}</div>
        </div>
      </Router>
    </div>
  )
}

export default connect(
  (state) => ({
    ...state.stateApp,
    lgnInf:state.stateLoginForm.lgnInf
  }))(MainApp)
