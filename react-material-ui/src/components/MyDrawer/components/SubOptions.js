import React from 'react'
import Button from '@material-ui/core/Button'
import {AvatarByIconName} from 'src/components/Avatars'
import {withStyles} from '@material-ui/core/styles/index'
import {grey, red} from '@material-ui/core/colors'

const styles = theme => {
  const subOptionLabelBase = {
    display: 'block',
    textAlign: 'left',
    marginLeft: '20%',
    fontSize: '0.7rem',
    width: '80% !important',
  }
  return {
    subOption: {
      margin: '0',
      padding: '0',
      height: '1.8rem !important',
      display: 'block',
      borderRadius: '0 !important',
    },
    subOptionLabel: {
      ...subOptionLabelBase,
      fontWeight: '300',
    },
    sltdSubOptionLabel: {
      ...subOptionLabelBase,
      fontWeight: '500',
    },
    avatarRoot: {
      width: '1rem',
      height: '1rem',
      position: 'absolute',
      marginLeft: '-10%',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0)',
      color: grey[900],
    },
    avatarIcon: {
      fontSize: '0.9rem',
    },
    avatarRootRight: {
      width: '0.8rem',
      height: '0.8rem',
      position: 'absolute',
      marginLeft: '70%',
      top: '45%',
      transform: 'translateY(-50%)',
      fontSize: '1.4rem',
      backgroundColor: red[900],
      color: grey[200],
    },
    avatarIconRight: {
      fontSize: '0.8rem',
    },
  }
}

const buttonProps = (_ID, parentId, _SELECTED, selectOption, action, classes) => {
  return {
    key: _ID,
    variant: 'text',
    disableRipple: true,
    fullWidth: true,
    classes: {
      root: classes.subOption,
      label: !_SELECTED ? classes.subOptionLabel : classes.sltdSubOptionLabel,
    },
    onClick: () => selectOption(_ID, parentId)
  }
}

export default withStyles(styles)(({items, selectOption, parentId, close, classes}) =>
  items
    .filter(({hidden}) => !hidden)
    .map(({_ID, label, icon, color, _SELECTED, action}, i) => {
      return (
        <Button {...buttonProps(_ID, parentId, _SELECTED, selectOption, action, classes)}>
          <AvatarByIconName iconName={icon}
                            classes={{root:classes.avatarRoot, icon:classes.avatarIcon}}
                            style={{color}}
          />
          {label}
          {
            _SELECTED ?
              <AvatarByIconName iconName={'bullet'}
                                classes={{root:classes.avatarRootRight, icon:classes.avatarIconRight}}/> :
              null
          }
        </Button>
      )
    }))
