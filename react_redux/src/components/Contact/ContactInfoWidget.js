import React, {useEffect} from "react"
import { withRouter } from "react-router"
import {connect} from "react-redux";
import {handleSelectedOffice} from "./store"

const ContactInfo = ( props ) => {

  useEffect(() => {
      props.dispatch(handleSelectedOffice(props.match.params.office))
  })

  return(
    <h3>
      * {props.match.params.office} info office *
    </h3>
  )
}

export default connect((state) => ({...state.stateContact}))(withRouter(ContactInfo))
