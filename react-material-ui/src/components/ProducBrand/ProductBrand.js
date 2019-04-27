import React from 'react'
import componentStyles from "./ProductBrand.styles"
import withStyles from "@material-ui/core/styles/withStyles"

const ProductBrand = ({classes}) => (
  <>
    <div className={classes.container}>
      <div className={classes.brand}>
        <h1 className={classes.title}>
          <b>PASOCHOA</b>
          <span style={{color:"yellow"}}> Forms.</span>
        </h1>
      </div>
      <div className={classes.brand}>
        React + Redux + Material UI + Grails 4
      </div>
    </div>
  </>
)

export default withStyles(componentStyles)(ProductBrand)
