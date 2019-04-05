import React from 'react'
import {connect} from "react-redux";
import API from "./api";

const WidgetLogout = (props) => {
  const {selectedOffice, lgnInf, ok, fails} = props
  const {onSubmit} = API.LogoutForm
  return (
    <div>
      <form onSubmit={() => onSubmit(lgnInf, ok, fails)}>
        <h3>
          Logged in as {lgnInf.email}{selectedOffice?` at ${selectedOffice} office`:""}
        </h3>
        <button type="submit" >LOGOUT</button>
      </form>
    </div>
  )
}


export default connect(
  (state) => ({
    ...state.stateLoginForm,
    selectedOffice: state.stateContact.selectedOffice
  }))(WidgetLogout)
