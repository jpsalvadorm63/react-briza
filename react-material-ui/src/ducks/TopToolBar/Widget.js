import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withRouter } from "react-router"

import {styles} from "./styles"

function TopToolBar({classes, history}) {
  const {root, toolbar, menuButton, grow} = classes
  return (
    <div className={root}>
      <AppBar position="static" className={toolbar}>
        <Toolbar>
          <IconButton className={menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{color:"black"}} className={grow}>
            Pasochoa
          </Typography>
          <Button color="inherit" onClick={()=> history.push("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

TopToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(TopToolBar))
