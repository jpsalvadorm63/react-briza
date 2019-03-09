import React from 'react'
import {
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import "../css/app024.css"

const ContactInfo = ( props ) => (
  <h1>
    Welcome to { props.match.params.location } office.
  </h1>
)

const Contact = ( props ) => (
  <div>
    <h1>Contact Component</h1>

    <div className="links">
      <NavLink to={ `${props.match.url}/india` } className="link">India Office</NavLink>
      <NavLink to={ `${props.match.url}/us` } className="link">Us Office</NavLink>
    </div>

    <Switch>
      <Route exact path={ props.match.url } render={ () => <h4>Please select an office.</h4> }/>
      <Route path={ `${props.match.url}/:location(india|us)` } component={ ContactInfo }/>
      <Route render={ () => <h2>No office found</h2> }/>
    </Switch>
  </div>
)

export default Contact
