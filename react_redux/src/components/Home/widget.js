import React from 'react'
import {connect} from "react-redux"
import {useEffect} from "react"
import {
  handleTestHomeSignal
} from "./store"

// Widget
const MainApp = (props) => {
  const {dispatch} = props
  const {msg} = props.componentInfo
  const {counter} = props

  useEffect(
    () => {
      dispatch(handleTestHomeSignal())
      return () => {
        // console.log("- - - - bye Home")
      }
    },[]
  );

  return (
    <div className="App">
      <div>
        <h1>HOME</h1>
        <div>{`${msg} :: ${counter}`}</div>
      </div>
    </div>
  )
}

export default connect((state) => ({...state.stateHome}))(MainApp)
