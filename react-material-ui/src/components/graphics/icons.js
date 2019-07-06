import React from 'react'
import Memory from '@material-ui/icons/MemoryOutlined'
import CPU from '@material-ui/icons/SelectAllTwoTone'
import Storage from '@material-ui/icons/Storage'
import Network from '@material-ui/icons/NetworkWifi'
import NetworkUsage from '@material-ui/icons/NetworkCheck'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/RemoveCircleOutline'
import Usage from '@material-ui/icons/TrendingUp'
import Bullet from '@material-ui/icons/ArrowLeft'
import Error from '@material-ui/icons/ErrorOutline'
import FiberManualRecordOutlined from '@material-ui/icons/FiberManualRecordOutlined'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const iconList = [
  { iconName:'memory',         icon: (classes) => <Memory classes={classes} /> },
  { iconName:'cpu',            icon: (classes) => <CPU classes={classes} /> },
  { iconName:'storage',        icon: (classes) => <Storage classes={classes} /> },
  { iconName:'network',        icon: (classes) => <Network classes={classes} /> },
  { iconName:'networkUsage',   icon: (classes) => <NetworkUsage classes={classes} /> },
  { iconName:'add',            icon: (classes) => <Add classes={classes} /> },
  { iconName:'remove',         icon: (classes) => <Remove classes={classes} /> },
  { iconName:'usage',          icon: (classes) => <Usage classes={classes} /> },
  { iconName:'bullet',         icon: (classes) => <Bullet classes={classes} /> },
  { iconName:'option',         icon: (classes) => <FiberManualRecordOutlined classes={classes} /> },
  { iconName:'optionSelected', icon: (classes) => <FiberManualRecord classes={classes} /> },
  { iconName:'lockOutlined',   icon: (classes) => <LockOutlinedIcon classes={classes} /> },
]

export const IconByName = ({iconName, classes}) => {
  const res = iconList.filter((item) => item.iconName === iconName)
  if(res.length >= 1) {
    return res[0].icon(classes)
  } else {
    return <Error classes={classes} />
  }
}
