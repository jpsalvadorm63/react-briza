import React from 'react'
import componentStyles from "./styles"
import withStyles from "@material-ui/core/styles/withStyles"

const Widget = ({classes}) => {
  const {container, brand, title} = classes
  return (
    <>
      <div className={container}>
        <div className={brand}>
          <h1 className={title}>
            <b>PASOCHOA</b>
            <span style={{color:"yellow"}}> Forms.</span>
          </h1>
        </div>
        <div className={brand}>
          React + Redux + Material UI + Grails 4
        </div>
      </div>
    </>
  )
}

export default withStyles(componentStyles)(Widget)
