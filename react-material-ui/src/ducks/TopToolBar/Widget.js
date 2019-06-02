import React, {useState} from 'react'
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
import {compose} from "redux"
// import {connect} from "react-redux";

import MyDrawer from "src/ducks/MainDrawer/Widget"

const TopToolBar = ({classes, history}) => {
  const {root, toolbar, menuButton, grow} = classes
  // const [open, setOpen] = useState(false) // TODO: uncomment this line ...
  const [open, setOpen] = useState(true) // TODO: ... then delete

  return (
    <div className={root}>
      <AppBar position="static" className={toolbar}>
        <Toolbar>
          <IconButton className={menuButton}
                      color="inherit" aria-label="Menu"
                      onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{color:"black"}} className={grow}>
            Pasochoa Forms
          </Typography>
          <Button color="inherit" onClick={()=> history.push("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={()=> history.push("/login")}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={()=> history.push("/")}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <MyDrawer open={open} setOpen={setOpen} />
    </div>
  )
}

TopToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const composition = compose(
  // connect to state
  withStyles(styles),
  withRouter
)

export default composition(TopToolBar)
