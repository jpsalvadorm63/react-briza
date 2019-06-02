import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper/index'
import Avatar from '@material-ui/core/Avatar/index'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography/index'
import FormControl from '@material-ui/core/FormControl/index'
import InputLabel from '@material-ui/core/InputLabel/index'
import Input from '@material-ui/core/Input/index'
import FormControlLabel from '@material-ui/core/FormControlLabel/index'
import Checkbox from '@material-ui/core/Checkbox/index'
import Button from '@material-ui/core/Button/index'
import {styles} from '../styles'
import withStyles from '@material-ui/core/styles/withStyles'


const LoginForm = ({classes}) => {
  const {paper, avatar, signIn, form, submit} = classes
  return (
    <>
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
            style={{width:'100%'}}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <div style={{width:'100%'}}>
            <Button type='submit' variant='contained' className={submit}>
              Sign in
            </Button>
          </div>
        </form>
      </Paper>
    </>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginForm)
