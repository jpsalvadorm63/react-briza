import React from "react"
import {Redirect} from "react-router-dom"
import { withRouter } from "react-router"

const Admin = ({appState, history}) => {
  const logout = () => {
    appState.logout()
    history.replace('/login' )
  }

  return (
    appState.loggedIn ? (
      <div>
        <h1>Admin Component</h1>
        <button onClick={logout}>Logout</button>
      </div>
    ) : <Redirect to="/login" />
  )
}

export default withRouter(Admin)
