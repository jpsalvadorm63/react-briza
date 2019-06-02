import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: { main: '#CFD8DC' },
  secondary: { main: '#FFF59D' },
}

const typography = {
  useNextVariants: true,
}

export default createMuiTheme({
  palette,
  typography,
})
