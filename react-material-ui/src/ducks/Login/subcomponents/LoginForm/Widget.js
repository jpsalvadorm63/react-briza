import React, {useState} from 'react'
import Card from '@material-ui/core/Card/index'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import {grey, yellow} from '@material-ui/core/colors'
import {styles} from './styles'
import {API} from './api'
import {
  ReadOnlyTextField,
  EmailTextField,
  PasswordTextField,
} from 'src/components/FieldsAndButtons/Fields'
import {Message} from 'src/components/Message/Widget'
import {handleLogin, handleLogout} from 'src/common/gvars/store'
import {AvatarByIconName} from 'src/components/Avatars'
import SubmitButton from 'src/components/FieldsAndButtons/SubmitButton'

export default withStyles(styles)(
  ({loginInfo, loginFc, loggedIn, dispatch, classes}) => {

    const updateLoginInfo = (loginInfo_) => {
      loginInfo.email = loginInfo_.email
      loginInfo.password = loginInfo_.password
    }

    const [loginInfoFormat, updateLoginInfoFormat] = useState(API.validateFormats(loginInfo))
    if(!loggedIn && !!loginInfo.found) dispatch(handleLogin())
    if(loggedIn && !loginInfo.found) dispatch(handleLogout())

    const gridItemProps = {
      item: true,
      classes: {item: classes.gridTextField}
    }

    return (
      <Card classes={{root:classes.paper}} elevation={4}>
        <AvatarByIconName iconName={'lockOutlined'} classes={{root:classes.avatarRoot, icon:classes.avatarIcon}} />
        <Message message={loginInfo.topMsg}/>
        <form className={classes.form}>
          <Grid container={true}
                justifytrue={'center'}
                classes={{root: classes.grid}}
                direction={'column'} >
            <Grid item={true} classes={{item: classes.gridTextField}} >
              <EmailTextField id={'email'} props={
                {
                  label: API.field.emailAddress.label,
                  info: loginInfo,
                  updateEmail: API.updateEmail,
                  loggedIn,
                  updateInfo: updateLoginInfo,
                  infoFormat: loginInfoFormat,
                  updateInfoFormat: updateLoginInfoFormat,
                  validateFormats: API.validateFormats,
                  classes,
                }
              } />
            </Grid>
            {
              !loggedIn?
                <Grid {...gridItemProps}>
                  <PasswordTextField id={'password'}
                                     props = {{
                                    loggedIn,
                                    info: loginInfo,
                                    updatePassword: API.updatePassword,
                                    value:loginInfo.password,
                                    label:API.field.password.label,
                                    updateInfo: updateLoginInfo,
                                    infoFormat: loginInfoFormat,
                                    updateInfoFormat: updateLoginInfoFormat,
                                    validateFormats: API.validateFormats,
                                    classes,
                                  }}
                  />
                </Grid> :
                <Grid {...gridItemProps}>
                  <ReadOnlyTextField id={'completeNane'}
                                     props={{
                                       value:loginInfo.completeName,
                                       caption:API.field.completeName.label,
                                       classes,
                                     }} />
                </Grid>
            }
            <Grid {...gridItemProps}>
              <SubmitButton props={
                {
                  loggedIn,
                  clickFc: loginFc,
                  info: loginInfo,
                  label: !loggedIn ? 'Login' : 'Logout',
                  classes
                }
              } />
            </Grid>
          </Grid>
        </form>
      </Card>
    )
  })
