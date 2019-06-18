import React from 'react'
import Paper from '@material-ui/core/Paper/index'
import Avatar from '@material-ui/core/Avatar/index'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button/index'
import withStyles from '@material-ui/core/styles/withStyles'
import getProps from './props'
import {styles} from './styles'

export default withStyles(styles)(
  ({classes, loggedIn}) => {
  const {
    paperProps,
    avatarProps,
    gridTextFieldProps,
    gridItemProps,
    emailFieldProps,
    passwordFieldProps,
    buttonLoginProps,
  } = getProps(classes, loggedIn)

  // let [state, validate] = useState(API.state0(initState))
  return (
    <Paper {...paperProps}>
      <Avatar {...avatarProps}>
        <LockOutlinedIcon />
      </Avatar>
      <form className={classes.form}>
        <Grid {...gridTextFieldProps}>
          <Grid {...gridItemProps} >
            <TextField id={'email'} {...emailFieldProps} />
          </Grid>
          <Grid {...gridItemProps}>
            <TextField id={'password'} {...passwordFieldProps} />
          </Grid>
          <Grid {...gridItemProps}>
            <Button {...buttonLoginProps}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
})
