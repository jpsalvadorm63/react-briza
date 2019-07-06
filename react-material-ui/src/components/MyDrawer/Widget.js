import React from "react"
import Drawer from '@material-ui/core/Drawer/index'
import {compose} from 'redux'
import {withStyles} from '@material-ui/core/styles/index'
import {styles} from './styles'
import MainOptions from './components/MainOptions'
import UserInfo from './components/UserInfo'
import {ErrorMessage} from 'src/components/Message'

const drawerProps = ({open, close, classes}) => {
  return (
    {
      open,
      anchor:'left',
      onClose:close,
      classes: {paper:classes.paper},
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

const userInfoProps = ({userInfo, classes}) => ({
  userInfo,
  classes
})

const composition = compose(withStyles(styles))

export default composition(props => (
  props.drawerContent.options ?
    <Drawer {...drawerProps(props)}>
      <UserInfo {...userInfoProps(props)}/>
      <div {...divProps()} >
        <MainOptions {...mainOptionsProps(props)} />
      </div>
    </Drawer> :
    <Drawer {...drawerProps(props)}>
      <UserInfo {...userInfoProps(props)}/>
      <ErrorMessage msg={'Unknown options for this user'} />
    </Drawer>
))
