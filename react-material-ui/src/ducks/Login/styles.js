const elementBG = '#333333'
const elementBG2 = '#898989'
const elementShadow = 'rgba(44, 44, 44, .2)'
const submitBackground = `linear-gradient(45deg, ${elementBG} 45%, ${elementBG2} 90%)`
const submitBoxShadow = `0 3px 5px 2px ${elementShadow}`
const elementColor = 'yellow'

export const styles = theme => ({
  main: {
    width: 300,
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(300 + theme.spacing(3 * 2))]: {
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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    backgroundColor: "#FFFEF"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: elementBG,
    color: elementColor,
    boxShadow: submitBoxShadow,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    background: submitBackground,
    boxShadow: submitBoxShadow,
    marginTop: theme.spacing(3),
    backgroundColor: elementBG,
    color: elementColor,
    width:'60%',
    marginLeft: '20%'
  },
});
