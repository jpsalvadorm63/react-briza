import React from 'react'
import {connect} from "react-redux"
import {useEffect} from "react"
import {
  handleTestHomeSignal
} from "./store"

// Widget
const MainApp = (props) => {
  const {dispatch, selectedOffice} = props
  const {msg} = props.componentInfo
  const {counter} = props

  const office = selectedOffice.length > 0 ? ` - ${selectedOffice} office` : ""

  useEffect(
    () => {
      dispatch(handleTestHomeSignal())
      return () => {}
    },[]
  );

  return (
    <div className="App">
      <div>
        <h1>HOME</h1>
        <div>{`${msg} :: ${counter} ${office}`}</div>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    ...state.stateHome,
    selectedOffice: state.stateContact.selectedOffice
  })
)(MainApp)
