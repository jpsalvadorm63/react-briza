import React from "react"
import Drawer from '@material-ui/core/Drawer/index'
import {compose} from 'redux'
import {withStyles} from '@material-ui/core/styles/index'
import {styles} from './styles'
import MainOptions from './components/MainOptions'
import UserInfo from './components/UserInfo'

const drawerProps = ({open, close, classes}) => {
  const styles = {paper:classes.paper}
  return (
    {
      open,
      anchor:'left',
      onClose:close,
      classes: styles,
    }
  )
}

const divProps = () => ({
  tabIndex: 0,
  role: "button",
})

const mainOptionsProps = ({drawerContent, selectOption, close, classes}) => ({
  drawerContent,
  selectOption,
  close,
  classes
})

const userInfoProps = ({drawerContent, classes}) => ({
  drawerContent,
  classes
})

const composition = compose(withStyles(styles))

export default composition(props => (
  <Drawer {...drawerProps(props)}>
    <UserInfo {...userInfoProps(props)}/>
    <div {...divProps()} >
      <MainOptions {...mainOptionsProps(props)} />
    </div>
  </Drawer>
))
