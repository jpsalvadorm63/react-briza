import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import {Typography} from "@material-ui/core"
import {graphicByName} from 'src/components/graphics'
import {shortName} from 'src/common/api'

const grid0Props = (classes) => {
  const styles = {
    root: classes.userInfoGrid0
  }
  return({
    container: true,
    spacing: 3,
    justify: 'center',
    classes: styles,
  })
}

const avatarProps = (classes, fileName = 'betty') => {
  const styles = {
    root: classes.userInfoAvatar
  }
  return({
    alt: fileName,
    src: graphicByName(fileName),
    classes: styles,
  })
}

const nameProps = (classes) => {
  const styles = {body1: classes.userInfoName}
  return {
    variant: 'body1',
    classes: styles,
  }
}

const roleProps = (classes) => {
  const styles = {body2: classes.userInfoRole}
  return {
    variant: 'body2',
    classes: styles,
  }
}

const grid2Props = (classes) => ({
  container: false,
  item: true,
})

export default ({userInfo, classes}) => {
  const {completeName, roleName} = userInfo
  return(
    <Grid {...grid0Props(classes)}>
      <Avatar {...avatarProps(classes, userInfo.photo)}/>
      <Grid {...grid2Props(classes)}>
        <Typography {...nameProps(classes)}>
          {shortName(completeName)}
        </Typography>
        <Typography {...roleProps(classes)}>
          {roleName ? roleName: 'no role defined'}
        </Typography>
      </Grid>
    </Grid>
  )
}
