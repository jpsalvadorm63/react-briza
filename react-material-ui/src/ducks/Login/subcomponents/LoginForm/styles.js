const elementBG = '#333333'
const elementBG2 = '#898989'
const elementShadow = 'rgba(44, 44, 44, .2)'
const submitBackground = `linear-gradient(45deg, ${elementBG} 45%, ${elementBG2} 90%)`
const avatarBoxShadow = `1px 1px 2px 1px ${elementShadow}`
const elementColor = 'yellow'

const buttonBasis = {
  background: submitBackground,
  borderRadius: '8px',
  color: elementColor,
}

const helperTextBasic = {
  fontSize: '0.7rem',
  fontWeight: 300,
}

export const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    backgroundColor: "#FFFEF",
    borderRadius: '8px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
    color: 'yellow',
    boxShadow: avatarBoxShadow,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: {
    marginLeft: '2px',
    marginRight: '2px',
  },
  grid: {
    padding: '16px 0',
    // border:'dotted red 0.2px', // TODO: delete or comment this line
  },
  submit: {
    ...buttonBasis,
    width:'80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '2rem',
  },
  helperText: { ...helperTextBasic, },
  helperTextError: {
    ...helperTextBasic,
    color: 'red',
  },
})
