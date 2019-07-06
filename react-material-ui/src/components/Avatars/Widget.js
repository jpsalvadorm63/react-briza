import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {Box} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    error: {
      main: '#000000',
      contrastText: '#ffffff'
    },
  },
})

const useStyles = makeStyles({
  root: {
    padding: '0.5rem',
    margin: '0.5rem'
  },
})

const myProps = (classes) => ({
  bgcolor: 'error.main',
  color: 'error.contrastText',
  classes: {root:classes.root}
})

const Component = ({msg}) => {
  const classes = useStyles()

  return (
    <Box {...myProps(classes)}>
      {msg}
    </Box>
  )
}

const props = {
  // classes: {root:classes.avatar},
  component: 'div',
}

// const styles = makeStyles
export const AvatarByIcon = (name) => (
  <>
    <Avatar {...props}>

    </Avatar>
  </>
)
