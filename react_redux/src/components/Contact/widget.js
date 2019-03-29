import React from "react"
import {connect} from "react-redux"
import {useEffect} from "react"
import { handleTestContactSignal } from "./store"

// widget
const Contact = (props) => {
  const {dispatch} = props
  const {msg} = props.componentInfo
  const {counter} = props

  useEffect(
    () => {
      dispatch(handleTestContactSignal())
      return () => {
        // console.log("- - - - bye About")
      }
    },[]
  );

  return (
    <div className="App">
      <div>
        <h1>CONTACT</h1>
        <div>{`${msg} :: ${counter}`}</div>
      </div>
    </div>
  )
}

export default connect((state) => ({...state.stateContact}))(Contact)
