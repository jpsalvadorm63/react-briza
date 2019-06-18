import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TopToolBar from 'src/ducks/TopToolBar/Widget'
import MyRouter from 'src/components/MyRouter'
import {routesIndex} from '../../common/routesIndex'
import {connect} from 'react-redux'
import {compose} from 'redux'

const composition = compose(
  connect((state) => ({...state.storeRoutes})),
)

export default composition( ({basicRoutes, roleRoutes}) => {
  const myRouterProps = {
    routes: basicRoutes,
    roleRoutes: roleRoutes,
    routesIndex: routesIndex,
  }

  return (
    <Router>
      <TopToolBar />
      <MyRouter {...myRouterProps}/>
    </Router>
  )
})
