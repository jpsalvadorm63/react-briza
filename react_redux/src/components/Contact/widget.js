import React from "react"
import {connect} from "react-redux"
import { withRouter } from "react-router"
import {useEffect} from "react"
import { handleTestContactSignal } from "./store"

// Contacts
import Contacts from "./ContactsWidget"

// widget
const Contact = (props) => {
  const {dispatch, selectedOffice, history, match} = props
  const {msg} = props.componentInfo
  const {counter} = props

  const office = selectedOffice.length > 0 ? ` - ${selectedOffice} office` : ""

  useEffect(
    () => {
      dispatch(handleTestContactSignal())
      if(selectedOffice.length > 0)
        history.replace(`${match.url}/${selectedOffice}`)
      return () => {}
    },[]
  )

  return (
    <div className="App">
      <div>
        <h1>CONTACT</h1>
        <div>{`${msg} :: ${counter}${office}`}</div>
        <Contacts selectedOffice={selectedOffice}/>
      </div>
    </div>
  )
}

export default connect(
  state => ({...state.stateContact})
)(withRouter(Contact))
