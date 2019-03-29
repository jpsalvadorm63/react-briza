import React from "react"
import {connect} from "react-redux"
import {useEffect} from "react"
import { handleTestAboutSignal } from "./store"

// widget
const About = (props) => {
  const {dispatch} = props
  const {msg} = props.componentInfo
  const {counter} = props

  useEffect(
    () => {
      dispatch(handleTestAboutSignal())
      return () => {
        // console.log("- - - - bye About")
      }
    },[]
  );

  return (
    <div className="App">
      <div>
        <h1>ABOUT</h1>
        <div>{`${msg} :: ${counter}`}</div>
      </div>
    </div>
  )
}

export default connect((state) => ({...state.stateAbout}))(About)
