import React, { useState, useEffect } from "react"
import {Prompt} from "react-router-dom"
import { withRouter } from "react-router"

const Login = ({appState, history}) => {
  const [state, setState] = useState({
      password:"",
      showPromptOnNav: false,
      allowed: false
  })

  useEffect((previous) => {
    console.log("22 ===> ", previous, JSON.stringify(state))
    if(state.allowed) {
      appState.login()
      history.replace('/admin')
    }
  })

  const targetPasword =  'password'

  const savePassword = ( event ) => {
    setState({
      ...state,
      password: event.target.value,
      showPromptOnNav: event.target.value.length > 0
    })
  }

  const handleFormSubmit = ( event ) => {
    event.preventDefault()
    if(state.password === targetPasword) {
      setState({
        ...state,
        showPromptOnNav: false,
        allowed: true
      })
    }
    else{
      alert('Password is wrong.')
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Please sign in</h3>

      <input
        type="password"
        placeholder="Type password"
        value={ state.password }
        onChange={ savePassword}
      />

      <button type="submit">Submit</button>

      <Prompt
        when={ state.showPromptOnNav }
        message={"Are you sure? Your data will be lost."}
      />
    </form>
  )
}

export default withRouter(Login)
