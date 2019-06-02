import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import {Typography} from "@material-ui/core";

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

const avatarProps = (classes) => {
  const styles = {
    root: classes.userInfoAvatar
  }
  return({
    alt: "otway",
    src: "otway.svg",
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

export default ({drawerContent, classes}) => {
  const {name, role} = drawerContent.header.userInfo
  return(
    <Grid {...grid0Props(classes)}>
      <Avatar {...avatarProps(classes)}/>
      <Grid {...grid2Props(classes)}>
        <Typography {...nameProps(classes)}>{name}</Typography>
        <Typography {...roleProps(classes)}>{role}</Typography>
      </Grid>
    </Grid>
  )
}
