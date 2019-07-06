import {API} from './api'

const props = (
  loginInfo_,
  loginInfoFormat_,
  loggedIn,
  classes,
  updateLoginInfo,
  updateLoginInfoFormat,
  loginFc,
) => ({
  paperProps: {
    classes: {root:classes.paper},
    elevation: 4,
  },
  avatarProps: {
    classes: {root:classes.avatar},
    component: 'div',
  },
  gridTextFieldProps: {
    container: true,
    justify: 'center',
    classes: {root: classes.grid},
    direction: 'column',
  },
  gridItemProps: {
    item: true,
    classes: {item: classes.gridTextField},
  },
  formHelperTextProps: {
    classes:{
      root: classes.helperText,
      error: classes.helperTextError,
    }
  },
  emailFieldProps: {
    value: loginInfo_.email,
    error: false,
    margin: 'dense',
    autoFocus: true,
    autoComplete: 'off',
    label: API.field.emailAddress.caption,
    type: 'email',
    fullWidth: true,
    helperText: loginInfoFormat_.email.format.ok ? '' : loginInfoFormat_.email.format.msg,
    InputProps: {readOnly: loggedIn},
    classes: {root: classes.textField},
    FormHelperTextProps: {..._this.formHelperTextProps},
    onChange:(e) => {
      e.preventDefault(loginInfo_)
      const result = API.updateEmail(e.target.value, loginInfo_)
      updateLoginInfo(result)
      updateLoginInfoFormat(API.validateFormats(result))
    },
  },
  completeNameFieldProps: {
    value: loginInfo_.completeName ? loginInfo_.completeName : '*',
    error: false,
    margin: 'dense',
    autoComplete: 'off',
    label: API.field.completeName.caption,
    type: 'text',
    fullWidth: true,
    InputProps: {readOnly: true},
    classes: {root: classes.textField},
  },
  passwordFieldProps: {
    value: loginInfo_.password,
    margin: 'dense',
    label: API.field.password.caption,
    type: 'password',
    autoComplete: 'off',
    fullWidth: true,
    InputProps: {readOnly: loggedIn},
    classes: {root: classes.textField},
    helperText: loginInfoFormat_.password.format.ok ? '' : loginInfoFormat_.password.format.res[0].msg,
    FormHelperTextProps: {..._this.formHelperTextProps},
    onChange:(e) => {
      e.preventDefault()
      const result = API.updatePassword(e.target.value, loginInfo_)
      updateLoginInfo(result)
      updateLoginInfoFormat(API.validateFormats(result))
    },
  },
  buttonLoginProps: {
    variant:'contained',
    size: 'small',
    classes: {root:classes.submit},
    onClick: (e)=> {
      e.preventDefault()
      loginFc(loginInfo_)
    }
  }
})

const _this = props

export default props
