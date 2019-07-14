import React from 'react'
import Drawer from '@material-ui/core/Drawer/index'
import {withStyles} from '@material-ui/core/styles/index'
import MainOptions from './components/MainOptions'
import UserInfo from './components/UserInfo'
import {ErrorMessage} from 'src/components/Message'
import {grey} from "@material-ui/core/colors";

const styles = theme => ({
  paper: {
    backgroundImage: 'url("background.svg")',
    backgroundPosition: 'background',
    backgroundRepeat: 'no-repeat',
    minWidth: '260px',
    "@media (min-width: 300px)": { width:'40%', },
    "@media (min-width: 576px)": { width:'36%', },
    "@media (min-width: 768px)": { width:'26%', },
    "@media (min-width: 992px)": { width:'20%', },
    "@media (min-width: 1200px)": { width:'18%', },
    maxWidth: '216px',
    borderRadius: '4px 4px 0 0 ',
    margin: '4px 0 0 4px',
  },
  avatarRoot: {
    width: '1rem',
    height: '1rem',
    position: 'absolute',
    marginLeft: '-10%',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '0.8rem',
    backgroundColor: 'rgba(0,0,0,0)',
    color: grey[600],
  }
})

const drawerProps = ({open, close, classes}) =>  ({
  open,
  anchor:'left',
  onClose:close,
  classes:{paper: classes.paper},
})

const divProps = {
  tabIndex: 0,
  role: 'button',
}

const mainOptionsProps = ({drawerContent, selectOption, close}) => ({
  drawerContent,
  selectOption,
  close,
})

export default withStyles(styles)(props => (
  props.drawerContent.options ?
    <Drawer {...drawerProps(props)}>
      <UserInfo userInfo={props.userInfo}/>
      <div {...divProps} >
        <MainOptions {...mainOptionsProps(props)} />
      </div>
    </Drawer> :
    <Drawer {...drawerProps(props)}>
      <UserInfo userInfo={props.userInfo}/>
      <ErrorMessage msg={'Unknown options for this user'} />
    </Drawer>
))
