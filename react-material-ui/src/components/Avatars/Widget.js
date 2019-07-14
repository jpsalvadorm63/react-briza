import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import {IconByName} from 'src/components/graphics'

export const AvatarByIconName = ({iconName, classes}) => (
  <Avatar component={'div'} className={classes.root}>
    <IconByName iconName={iconName} className={classes.icon}/>
  </Avatar>
)
