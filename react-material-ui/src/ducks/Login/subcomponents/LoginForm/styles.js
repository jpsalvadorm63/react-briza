import {yellow, grey} from "@material-ui/core/colors";
import {AvatarByIconName} from "../../../../components/Avatars";
import React from "react";

export const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    borderRadius: '8px',
    width: '260px',
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
  helperTextError: {
    fontSize: '0.7rem',
    fontWeight: 300,
    color: 'red',
  },
  submit: {
    background: `linear-gradient(45deg, ${grey[900]} 55%, ${grey[500]} 90%)`,
    color: yellow[500],
    borderRadius: '8px',
    width:'80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '2rem',
  },
  avatarRoot:{
    width: '2.8rem',
    height: '2.8rem',
    background: `linear-gradient(45deg, ${grey[800]} 35%, ${grey[500]} 70%)`,
    backgroundColor: grey[900],
    color: yellow[500],
  },
  avatarIcon: {
    fontSize: '1.8rem',
  }
})

const _this = styles
