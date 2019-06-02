import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import MyDrawer from 'src/components/MyDrawer'
// import JsonViewer from "src/common/JsonViewer"
// import {UserInfo} from "src/components/UserInfo"
import {handleSelectDrawerOption} from "./store"

const Widget = (props) => {
  const {dispatch, open, setOpen, classes, drawerContent} = props

  const userInfo = () => ("user info") //<UserInfo/>

  const close = () => setOpen(false)

  const selectOption = (id, parentId, action) => {
    if(!!id && !!parentId) close()
    // if(action) {
    //   console.log("===> 0")
    // } else {
    //   console.log("===> 1",id, parentId)
    // }
    dispatch(handleSelectDrawerOption(drawerContent, id, parentId))
  }

  const drawerProps = {
    classes,
    drawerContent,
    selectOption,
    open,
    userInfo,
    close,
  }

  return (
    <>
      <MyDrawer {...drawerProps} />
      {/*<JsonViewer json={drawerContent} />*/}
    </>
  )
}

const composition = compose(
  connect((state) => ({...state.reducerDrawer})),
)

export default composition(Widget)
