import React from "react"
import Button from "@material-ui/core/Button"
import {InconByName} from "../../../ducks/MainDrawer/icons"

const buttonProps = (_ID, parentId, _SELECTED, selectOption, action, classes) => {
  const styles = {
    root: !_SELECTED ? classes.subOption : classes.sltdSubOption,
    label: classes.subOptionlabel,
  }
  return {
    key: _ID,
    variant: 'text',
    disableRipple: true,
    fullWidth: true,
    classes: styles,
    onClick: () => selectOption(_ID, parentId)
  }
}

const iconByNameProps = (icon, classes, colors) => {
  const styles = {root:classes['iconStyle2' + colors]}
  return {
    iconName: icon,
    classes: styles,
  }
}

const iconByNameRightProps = (classes) => {
  const styles = {root:classes.iconStyle3Black}
  return {
    iconName: 'bullet',
    classes: styles,
  }
}

export default ({items, selectOption, parentId, close, classes}) =>
  items
    .filter(({hidden}) => !hidden)
    .map(({_ID, label, icon, colors, _SELECTED, action}, i) => {
      return (
        <Button {...buttonProps(_ID, parentId, _SELECTED, selectOption, action, classes)}>
          <InconByName {...iconByNameProps(icon, classes, colors)} />
          {label}
          {_SELECTED ? <InconByName {...iconByNameRightProps(classes)} /> : null}
        </Button>
      )
    })
