import React, {useState} from 'react'
import Card from '@material-ui/core/Card/index'
import Avatar from '@material-ui/core/Avatar/index'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button/index'
import withStyles from '@material-ui/core/styles/withStyles'
import getProps from './props'
import {styles} from './styles'
import {API} from './api'
import {Message} from 'src/components/Message/Widget'
import {handleLogin, handleLogout} from 'src/common/gvars/store'


export default withStyles(styles)(
  ({loginInfo, loginFc, loggedIn, dispatch, classes}) => {

    const updateLoginInfo = (loginInfo_) => {
      loginInfo.email = loginInfo_.email
      loginInfo.password = loginInfo_.password
    }

    const [loginInfoFormat_, updateLoginInfoFormat] = useState(API.validateFormats(loginInfo))
    if(!loggedIn && !!loginInfo.found) dispatch(handleLogin())
    if(loggedIn && !loginInfo.found) dispatch(handleLogout())

    const {
      paperProps,
      avatarProps,
      gridTextFieldProps,
      gridItemProps,
      emailFieldProps,
      passwordFieldProps,
      buttonLoginProps,
      completeNameFieldProps,
    } = getProps(
      loginInfo,
      loginInfoFormat_,
      loggedIn,
      classes,
      updateLoginInfo,
      updateLoginInfoFormat,
      loginFc,
    )

    return (
      <Card {...paperProps}>
        <Avatar {...avatarProps}>
          <LockOutlinedIcon />
        </Avatar>
        <Message message={loginInfo.topMsg}/>
        <form className={classes.form}>
          <Grid {...gridTextFieldProps}>
            <Grid {...gridItemProps} >
              <TextField id={'email'} {...emailFieldProps} />
            </Grid>
            {
              !loggedIn?
                <Grid {...gridItemProps}>
                  <TextField id={'password'} {...passwordFieldProps} />
                </Grid> : null
            }
            {
              loggedIn?
                <Grid {...gridItemProps}>
                  <TextField id={'completeNane'} {...completeNameFieldProps} />
                </Grid> : null
            }
            <Grid {...gridItemProps}>
              <Button {...buttonLoginProps}>
                {!loggedIn ? 'Login' : 'Logout'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    )
  })
