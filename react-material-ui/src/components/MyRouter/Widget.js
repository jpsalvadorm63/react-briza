import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

const combineRoutesPath = (routes, routesIndex) => (
  routes.map(item => (
    {...item, ...routesIndex.filter(itm => item.path === itm.path)[0]}
  ))
)

const Routers = ({routes, routesIndex, add404}) => (
  <div>
    <Switch>
      {
        combineRoutesPath(routes, routesIndex).map(
          ({exact, path, renderComponent, renderFunction}, key) => {
            const myProps = {
              key:key,
              exact:exact,
              path:path,
              ...(
                renderComponent ? {component:renderComponent} :
                  renderFunction? {render:renderFunction} : null
              )
            }
            return <Route {...myProps} />
          }
        )
      }
      <Route render={() => <h1>404 Error</h1>} />
    </Switch>
  </div>
)

export default ({routes, routesIndex, add404=true}) => {
  const routerProps = {
    routes: routes,
    routesIndex: routesIndex,
    add404: add404,
  }

  return <Routers {...routerProps}/>
}
