import React , {useEffect} from "react"
import {
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import {connect} from "react-redux"
import { withRouter } from "react-router"
import ContactInfo from "./ContactInfoWidget"
import {divStyle} from "./styles"
import {handleSelectedOffice} from "./store"


// widget
const Contacts = (props) => {
  const {dispatch, history, match} = props

  const All = () => {
    useEffect(
      () => {
        dispatch(handleSelectedOffice(""))
        history.replace(`${match.url}`)
    })
    return null
  }

  return (
    <div className="App">
      <div style={divStyle}>
        <h2>select an office</h2>

        <div className="links">
          <NavLink to={`${match.url}/india`} className="link">India Office</NavLink>
          <NavLink to={`${match.url}/us`} className="link">Us Office</NavLink>
          <NavLink to={`${match.url}/all`} className="link">all</NavLink>
        </div>

        <Switch>
          <Route exact path={`${match.url}/all`} render={() => <All dirTo={`${match.url}`}/>} />
          <Route exact path={match.url} render={ () => <h4>(no office selected ...)</h4> }/>
          <Route path={ `${match.url}/:office(india|us)` } render={() => <ContactInfo />}/>
          <Route render={ () => <h3>No office found</h3> }/>
        </Switch>
      </div>
    </div>
  )
}

export default connect((state) => ({...state.stateContact}))(withRouter(Contacts))
