const buttonProps = (clases) => ({
  type:'submit',
  variant:'contained',
  size: 'small',
})

export default (
  classes,
  loggedIn = false,
  onChangeEmail = ()=> console.error('ERROR: LoginForm.onChangeEmail, has not been implemented'),
  onChangePassword = ()=> console.error('ERROR: LoginForm.onChangePassword, has not been implemented'),
  login = () => console.error('ERROR: LoginForm.login, has not been implemented'),
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
    classes: {item: classes.textField},
  },
  buttonLoginProps: {
    ...buttonProps,
    classes:{root:classes.submit},
    onClick: login,
  },
  emailFieldProps: {
    error: false,
    margin: 'dense',
    autoFocus: true,
    label: 'Email Address',
    type: 'email',
    fullWidth: true,
    helperText:'Please enter a valid email',
    InputProps: {readOnly: loggedIn},
    classes: {root: classes.helperText},
    FormHelperTextProps: {
      classes:{
        root: classes.helperText,
        error: classes.helperTextError,
      }
    },
    onChange:onChangeEmail,
  },
  passwordFieldProps: {
    margin: 'dense',
    label: 'Password',
    type: 'password',
    autoComplete: 'current-password',
    fullWidth: true,
    helperText:"Please ...",
    InputProps: {readOnly: loggedIn},
    onChange:onChangePassword,
  }
})
