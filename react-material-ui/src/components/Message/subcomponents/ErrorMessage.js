import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import {ThemeProvider} from '@material-ui/styles'
import {Box} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'

const theme = (traumatic) => createMuiTheme({
  palette: {
    error: {
      main: !traumatic ? '#000000' : '#ff0000',
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

export const ErrorMessage = ({msg, traumatic=false})=> {
  return (
    <ThemeProvider theme={theme(traumatic)}>
      <Component msg={msg} />
    </ThemeProvider>
  )
}
