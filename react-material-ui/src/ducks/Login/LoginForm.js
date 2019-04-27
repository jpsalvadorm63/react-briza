import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import {componentStyles} from './componentStyles'
import withStyles from '@material-ui/core/styles/withStyles'


const LoginForm = ({classes}) => {
  const {paper, avatar, signIn, form, submit} = classes
  return (
    <>
      <CssBaseline />
      <Paper className={paper} elevation={4}>
        <Avatar className={avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6">Sign in</Typography>
        <form className={form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={submit + ' ' + signIn}
          >Sign in</Button>
        </form>
      </Paper>
    </>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(componentStyles)(LoginForm)
