import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import {Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles/index'
import {graphicByName} from 'src/components/graphics'
import {shortName} from 'src/common/api'

const styles = theme => ({
  userInfoGrid0 : {
    margin: '24px 0 0 0',
    width: '100%',
    justify: 'flex-start',
    alignItems: 'flex-start'
  },
  userInfoAvatar: {
    boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
  },
  userInfoName: {
    fontSize: '1rem',
  },
  userInfoRole: {
    fontSize: '0.7rem',
      fontWeight: '100',
  },
})

const grid0Props = (classes) => ({
  container: true,
  spacing: 3,
  justify: 'center',
  classes: { root: classes.userInfoGrid0 },
})

const avatarProps = (classes, fileName = 'betty') => ({
  alt: fileName,
  src: graphicByName(fileName),
  classes: { root: classes.userInfoAvatar },
})

const nameProps = (classes) => ({
  variant: 'body1',
  classes: {body1: classes.userInfoName},
})

const roleProps = (classes) => ({
  variant: 'body2',
  classes: {body2: classes.userInfoRole},
})

const grid2Props = {
  container: false,
  item: true,
}

export default withStyles(styles)(({userInfo, classes}) => {
  const {completeName, roleName} = userInfo
  return(
    <Grid {...grid0Props(classes)}>
      <Avatar {...avatarProps(classes, userInfo.photo)}/>
      <Grid {...grid2Props}>
        <Typography {...nameProps(classes)}>
          {shortName(completeName)}
        </Typography>
        <Typography {...roleProps(classes)}>
          {roleName ? roleName : 'no role defined'}
        </Typography>
      </Grid>
    </Grid>
  )
})
