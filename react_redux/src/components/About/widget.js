import React from "react"
import {connect} from "react-redux"
import {useEffect} from "react"
import { handleTestAboutSignal } from "./store"

// widget
const About = (props) => {
  const {dispatch, selectedOffice} = props
  const {msg} = props.componentInfo
  const {counter} = props

  const office = selectedOffice.length > 0 ? ` - ${selectedOffice} office` : ""

  useEffect(
    () => {
      dispatch(handleTestAboutSignal())
      return () => {}
    },[]
  );

  return (
    <div className="App">
      <div>
        <h1>ABOUT</h1>
        <div>{`${msg} :: ${counter} ${office}`}</div>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    ...state.stateAbout,
    selectedOffice: state.stateContact.selectedOffice
  })
)(About)
