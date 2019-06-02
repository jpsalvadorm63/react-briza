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

export const InconByName = ({iconName, classes}) => {
  let result = null
  switch (iconName) {
    case 'memory':
      result = <Memory classes={classes} />; break
    case 'cpu':
      result = <CPU classes={classes} />; break
    case 'storage':
      result = <Storage classes={classes} />; break
    case 'network':
      result = <Network classes={classes} />; break
    case 'networkUsage':
      result = <NetworkUsage classes={classes} />; break
    case 'add':
      result = <Add classes={classes} />; break
    case 'remove':
      result = <Remove classes={classes} />; break
    case 'usage':
      result = <Usage classes={classes} />; break
    case 'bullet':
      result = <Bullet classes={classes} />; break
    case 'option':
      result = <FiberManualRecordOutlined classes={classes} />; break
    case 'optionSelected':
      result = <FiberManualRecord classes={classes} />; break
    default:
      result = <Error classes={classes} />; break
  }
  return result
}
