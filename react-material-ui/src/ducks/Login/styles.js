export const loginGridStyles = theme => ({
  mainLeft: {
    width: 260,
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    backgroundColor: 'transparent',
    [theme.breakpoints.up(300 + theme.spacing(3 * 2))]: {
      width: 260,
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
      display: 'block', // Fix IE 11
      textShadow: "1px 1px #777777"
    },
    [theme.breakpoints.up(850)]: {
      width: 500,
      marginLeft: 10,
      display: 'block', // Fix IE 11
      marginRight: 'auto',
    },
  },
})
