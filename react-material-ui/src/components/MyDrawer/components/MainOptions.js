import React, {Fragment} from "react";
import Button from "@material-ui/core/Button";
import {InconByName} from "../../../ducks/MainDrawer/icons";
import Collapse from "@material-ui/core/Collapse";
import SubOptions from "./SubOptions";

const buttonProps = (option, classes, selectOption) => {
  const styles = {
    root: !option._SELECTED ? classes.mainOption : classes.sltdMainOption,
    label: !option._SELECTED ? classes.mainOptionLabel : classes.sltdMainOptionLabel,
  }
  return {
    id: option._ID,
    size:'small',
    variant: 'text',
    disableFocusRipple: true,
    disableRipple: true,
    fullWidth: true,
    classes: styles,
    onClick:() => selectOption(option._ID),
  }
}

const iconByNameProps = (option, classes) => {
  const styles = {root:classes.iconStyleGray}
  return {
    iconName: !option._SELECTED ? 'option' : 'optionSelected',
    classes: styles,
  }
}

const listItemsProps = (selectOption, option, classes) => {
  return {
    selectOption,
    parentId:option._ID,
    items:option.items,
    classes,
  }
}

export default ({drawerContent, selectOption, close, classes}) => (
  <>
    {
      drawerContent.options.map((option) => {
        return (
          <Fragment key={option._ID}>
            <Button {...buttonProps(option, classes, selectOption)}>
              <InconByName {...iconByNameProps(option, classes)}/>
              {option.label}
            </Button>
            <Collapse in={option._SELECTED}>
              <SubOptions {...listItemsProps(selectOption, option, classes)} />
            </Collapse>
          </Fragment>
        )
      })
    }
  </>
)
