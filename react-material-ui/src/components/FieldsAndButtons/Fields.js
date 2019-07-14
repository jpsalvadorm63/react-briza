import React from 'react'
import TextField from '@material-ui/core/TextField'

export const ReadOnlyTextField = ({id, props}) => (
  <TextField id={id}
             value={props.value ? props.value : '*'}
             error={false}
             margin={'dense'}
             autoComplete={'off'}
             label={props.caption}
             type={'text'}
             fullWidth={true}
             InputProps={{readOnly: true}}
             classes={{root: props.classes.textField}}
  />
)

export const EmailTextField = ({id, props}) => (
  <TextField id={id}
             type={'email'}
             value={props.info.email}
             error={false}
             margin={'dense'}
             autoFocus={true}
             autoComplete={'off'}
             label={props.label}
             fullWidth={true}
             helperText={
               props.infoFormat.email.format.ok ? '' :
                 props.infoFormat.email.format.msg
             }
             InputProps={{readOnly: props.loggedIn}}
             classes={{root: props.classes.textField}}
             FormHelperTextProps={
               {
                 classes: {
                   root: props.classes.helperText,
                   error: props.classes.helperTextError,
                 }
               }
             }
             onChange={
               (e) => {
                 e.preventDefault()
                 const result = props.updateEmail(e.target.value, props.info)
                 props.updateInfo(result)
                 props.updateInfoFormat(props.validateFormats(result))
               }
             }
  />
)

export const PasswordTextField = ({id, props}) => (
  <TextField id={id}
             type={'password'}
             value={props.value}
             margin={'dense'}
             label={props.label}
             autoComplete={'off'}
             fullWidth={true}
             InputProps={{readOnly: props.loggedIn}}
             classes={{root: props.classes.textField}}
             helperText={
               props.infoFormat.password.format.ok ? '' :
                 props.infoFormat.password.format.res[0].msg
             }
             FormHelperTextProps={
               {
                 classes: {
                   root: props.classes.helperText,
                   error: props.classes.helperTextError,
                 }
               }
             }
             onChange={
               (e) => {
                 e.preventDefault()
                 const result = props.updatePassword(e.target.value, props.info)
                 props.updateInfo(result)
                 props.updateInfoFormat(props.validateFormats(result))
               }
             }
  />
)
