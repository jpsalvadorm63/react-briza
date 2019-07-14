import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Parallax from 'src/components/Parallax'
import ProductBrand from "src/components/ProductBrand/Widget"
import {loginGridStyles} from "./styles"
import {bgStyle} from "src/common/api"
import LoginForm from './subcomponents/LoginForm/Widget'
import { handleUserLogin, handleUserLogout } from "./store"
import {Grid} from '@material-ui/core'

const composition = compose(
  connect(
    (state) => ({
      loggedIn: state.storeGVars.loggedIn,
      loginInfo: state.storeLogin.loginInfo
    })
  ),
  withStyles(loginGridStyles)
)

export default composition( ({loginInfo, loggedIn, history, dispatch, classes}) => {
  const loginFc = (loginInfo) => {
    if (!loggedIn) {
      dispatch(handleUserLogin(loginInfo, loggedIn))
    }
    if (loggedIn) dispatch(handleUserLogout(loginInfo))
  }

  const loginFormProps = {
    loginInfo: {...loginInfo},
    loginFc,
    loggedIn,
    history,
    dispatch,
  }

  return (
    <>
      <Grid container>
        <Grid item >
          <ProductBrand />
        </Grid>
        <Grid item >
          <LoginForm {...loginFormProps} />
        </Grid>
      </Grid>
      {/*<Parallax style={bgStyle()}>*/}
        {/*<div className={classes.mainLeft} >*/}
        {/*  <LoginForm {...loginFormProps} />*/}
        {/*</div>*/}
        {/*<div className={classes.mainRight} >*/}
        {/*  <ProductBrand />*/}
        {/*</div>*/}
      {/*</Parallax>*/}
    </>
  )
})
