import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button'
import {AvatarByIconName} from 'src/components/Avatars'
import Collapse from '@material-ui/core/Collapse'
import {withStyles} from '@material-ui/core/styles/index'
import SubOptions from './SubOptions'
import {grey} from '@material-ui/core/colors'

const styles = theme => {
  const mainOptionLabelBase = {
    display: 'block',
    textAlign: 'left',
    fontSize: '0.8rem',
    textTransform: 'none',
    marginLeft: '10% !important',
    width: '90% !important',
  }
  return {
    mainOption: {
      margin: '0',
      padding: '0',
      height: '1.8rem !important',
      display: 'block',
      borderRadius: '0 !important',
    },
    mainOptionLabel: {
      ...mainOptionLabelBase,
      fontWeight: '400',
      borderBottom: '1px solid transparent',
    },
    sltdMainOptionLabel: {
      ...mainOptionLabelBase,
      fontWeight: '500',
      borderBottom: '1px solid silver'
    },
    avatarRoot: {
      width: '1rem',
      height: '1rem',
      position: 'absolute',
      marginLeft: '-7%',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0)',
      color: grey[600],
    },
    avatarIcon: {
      fontSize: '0.9rem',
    }
  }
}

const mainOptionButtonProps = (option, classes, selectOption) => {
  return {
    id: option._ID,
    size:'small',
    variant: 'text',
    disableFocusRipple: true,
    disableRipple: true,
    fullWidth: true,
    classes: {
      root: classes.mainOption,
      label: !option._SELECTED ? classes.mainOptionLabel : classes.sltdMainOptionLabel,
    },
    onClick:() => selectOption(option._ID),
  }
}

const listItemsProps = (selectOption, option, classes) => ({
  selectOption,
  parentId: option._ID,
  items: option.items,
  classes,
})

export default withStyles(styles)(({drawerContent, selectOption, close, classes}) => (
  <>
    {
      drawerContent.options.map((option) => (
          <Fragment key={option._ID}>
            <Button {...mainOptionButtonProps(option, classes, selectOption)}>
              <AvatarByIconName iconName={!option._SELECTED ? 'option' : 'optionSelected'}
                                classes={{root:classes.avatarRoot, icon: classes.avatarIcon}}
              />
              {option.label}
            </Button>
            <Collapse in={option._SELECTED} >
              <SubOptions {...listItemsProps(selectOption, option)} />
            </Collapse>
          </Fragment>
        )
      )
    }
  </>
))
