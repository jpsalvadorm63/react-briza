import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import MyDrawer from 'src/components/MyDrawer'
import {normalizeDrawerContent} from 'src/common/api'
import {handleSelectRoleMenuOption} from 'src/ducks/Login/store'

const composition = compose(
  connect((state) => ({
    roleMenu: normalizeDrawerContent(state.storeLogin.loginInfo.roleMenu),
    userInfo: state.storeLogin.loginInfo
  })),
)

export default composition( ({dispatch, open, setOpen, userInfo, roleMenu, classes, } ) => {
  const close = () => setOpen(false)

  const selectOption = (id, parentId, action) => {
    if(!!id && !!parentId) close()
    // if(action) {
    //   console.log("===> 0")
    // } else {
    //   console.log("===> 1",id, parentId)
    // }
    dispatch(handleSelectRoleMenuOption(roleMenu, id, parentId))
  }

  const drawerProps = {
    classes,
    drawerContent: roleMenu,
    selectOption,
    open,
    userInfo,
    close,
  }

  return <MyDrawer {...drawerProps} />
})
