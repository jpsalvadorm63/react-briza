const elementBG = "#333333"
const elementColor = "yellow"

export const componentStyles = theme => ({
  main: {
    width: 300,
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(300 + theme.spacing.unit * 3 * 2)]: {
      width: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainRight: {
    display: 'none', // Fix IE 11 issue.
    [theme.breakpoints.up(1100)]: {
      width: 750,
      marginLeft: 8,
      marginRight: 'auto',
      display: 'block', // Fix IE 11 issue.
      textShadow: "1px 1px #777777"
    },
    [theme.breakpoints.up(850)]: {
      width: 500,
      marginLeft: 10,
      marginRight: 'auto',
      display: 'block', // Fix IE 11 issue.
    },

  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    backgroundColor: "#FFFEF"
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: elementBG, //theme.palette.secondary.main,
    color: elementColor,
  },
  signIn: {
    backgroundColor: elementBG, //theme.palette.secondary.main,
    color: elementColor,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
