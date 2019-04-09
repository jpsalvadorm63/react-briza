import React from "react"
import {connect} from "react-redux"
import {useEffect} from "react"
import {
  handleTestLoginFormSignal,
  handleLoginInfo,
  handleLogout
} from "./store"
import Login from "./WidgetLogin"
import Logout from "./WidgetLogout"

// widget
const LoginForm = (props) => {
  const {dispatch, selectedOffice, lgnInf} = props
  const {msg} = props.componentInfo
  const {counter} = props

  const office = selectedOffice.length > 0 ? ` - ${selectedOffice} office` : ""
  const loginOk = result => dispatch(handleLoginInfo(result))
  const loginFails = result => console.log("login fails ===>", result)
  const logoutOk = result => dispatch(handleLogout())
  const logoutFails = result => console.log("logout fails ===>", result)

  useEffect(
    () => {
      dispatch(handleTestLoginFormSignal())
      return () => {}
    },[]
  );

  return (
    <div className="App">
      <div>
        {
          !lgnInf.loggedIn ?
            <Login ok={loginOk} fails={loginFails}/> :
            <Logout ok={logoutOk} fails={logoutFails}/>
        }
        <div>{`${msg} :: ${counter} ${office}`}</div>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    ...state.stateLoginForm,
    selectedOffice: state.stateContact.selectedOffice
  }))(LoginForm)
