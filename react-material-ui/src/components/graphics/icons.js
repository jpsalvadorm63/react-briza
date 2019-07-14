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
  { iconName:'memory',         icon: (className,fontSize) => <Memory                    className={className} fontSize={fontSize}/> },
  { iconName:'cpu',            icon: (className,fontSize) => <CPU                       className={className} fontSize={fontSize}/> },
  { iconName:'storage',        icon: (className,fontSize) => <Storage                   className={className} fontSize={fontSize} /> },
  { iconName:'network',        icon: (className,fontSize) => <Network                   className={className} fontSize={fontSize}/> },
  { iconName:'networkUsage',   icon: (className,fontSize) => <NetworkUsage              className={className} fontSize={fontSize}/> },
  { iconName:'add',            icon: (className,fontSize) => <Add                       className={className} fontSize={fontSize}/> },
  { iconName:'remove',         icon: (className,fontSize) => <Remove                    className={className} fontSize={fontSize}/> },
  { iconName:'usage',          icon: (className,fontSize) => <Usage                     className={className} fontSize={fontSize}/> },
  { iconName:'bullet',         icon: (className,fontSize) => <Bullet                    className={className} fontSize={fontSize}/> },
  { iconName:'option',         icon: (className,fontSize) => <FiberManualRecordOutlined className={className} fontSize={fontSize}/> },
  { iconName:'optionSelected', icon: (className,fontSize) => <FiberManualRecord         className={className} fontSize={fontSize}/> },
  { iconName:'lockOutlined',   icon: (className,fontSize) => <LockOutlinedIcon          className={className} fontSize={fontSize}/> },
]

export const IconByName = ({iconName, className, fontSize='default'}) => {
  const res = iconList.filter((item) => item.iconName === iconName)
  return res.length >= 1 ?
    res[0].icon(className, fontSize) :
    <Error className={className} fontSize={fontSize} />
}
