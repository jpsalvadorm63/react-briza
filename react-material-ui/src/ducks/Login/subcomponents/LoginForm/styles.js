const elementBG = '#333333'
const elementBG2 = '#898989'
const elementShadow = 'rgba(44, 44, 44, .2)'
const submitBackground = `linear-gradient(45deg, ${elementBG} 45%, ${elementBG2} 90%)`
const avatarBoxShadow = `1px 1px 2px 1px ${elementShadow}`
const elementColor = 'yellow'

export const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    borderRadius: '8px',
    width: '260px',
  },

  avatar: {
    // margin: theme.spacing(1),
    backgroundColor: 'black',
    color: 'yellow',
    boxShadow: avatarBoxShadow,
    width: '44px',
    height: '44px',
    fontHeight: '0.5rem'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  gridTextField: {
    marginLeft: '2px',
    marginRight: '2px',
  },
  textField: {
    margin: '0',
    height: '72px',
  },
  grid: {
    padding: '16px 0',
  },
  submit: {
    background: submitBackground,
    borderRadius: '8px',
    color: elementColor,
    width:'80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '2rem',
  },
  helperText: {
    fontSize: '0.7rem',
    fontWeight: 300,
  },
  helperTextError: {
    ..._this.helperText,
    color: 'red',
  },
})

const _this = styles
