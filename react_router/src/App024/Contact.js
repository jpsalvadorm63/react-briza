import React from 'react'
import {
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import "../css/app024.css"
import {useEffect} from 'react'

const ContactInfo = ( props ) => {
  useEffect(() => {
    console.log('02 ==> mounted or updated')
    return(
      () => console.log('03 ==> will unmount')
    )
  }, [])

  return(
    <h1>
      Welcome to { props.match.params.location } office.
    </h1>
  )
}



const Contact = ( props ) => {
  useEffect(() => {
    console.log('00 ==> mounted or updated')
    return(
      () => console.log('01 ==> will unmount')
    )
  }, [])

  return(
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
}

export default Contact
