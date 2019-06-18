import React, {useState} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withRouter } from "react-router"
import {styles} from "./styles"
import {compose} from "redux"

import MyDrawer from "src/ducks/MainDrawer/Widget"
import {connect} from "react-redux";

const composition = compose(
  connect((state) => ({loggedIn: state.storeGVars.loggedIn})),
  withStyles(styles),
  withRouter
)

export default composition(({classes, history, loggedIn}) => {
  const {menuButton, grow} = classes
  const [open, setOpen] = useState(true) //useState(false)

  const iconButtonProps = {
    className: menuButton,
    // color: 'red',
    'aria-label': 'Menu',
    onClick:() => setOpen(true)
  }

  return (
    <>
      <Toolbar style={{minHeight:'32px', backgroundColor: 'rgba(0,0,0,0)'}}>
        <IconButton {...iconButtonProps}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" style={{color:"black"}} className={grow}>
          Pasochoa Forms
        </Typography>
        { !loggedIn ?
          <>
            <Button color="inherit" onClick={()=> history.push("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={()=> history.push("/login")}>
              Sign Up
            </Button>
          </> :
          <>
            <Button color="inherit" onClick={()=> history.push("/login")}>
              Logout
            </Button>
          </>
        }
        <Button color="inherit" onClick={()=> history.push("/home")}>
          Home
        </Button>
      </Toolbar>
      <MyDrawer open={open} setOpen={setOpen} />
    </>
  )
})
