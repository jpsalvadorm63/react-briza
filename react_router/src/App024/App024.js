import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// styles
import "../css/app024.css"

// views
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Admin from "./Admin"
import Login from "./Login"
import Reducer from "./Reducer"

// application state
let appState = {
  loggedIn: false,
  login: () => { appState.loggedIn = true },
  logout: () => { appState.loggedIn = false }
}

// NavLinks
const NavLinks = () => {
  return(
    <div className="links">
      <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
      <NavLink to="/about?all=A&nothing=B" className="link">About</NavLink>
      <NavLink to="/reducer" className="link">Reducer</NavLink>
      <NavLink to="/contact" className="link">Contact Us</NavLink>
      <NavLink to="/admin" className="link">Admin</NavLink>
    </div>
  )
}

const routesIndex = (path) => ([
  {path:'/', renderComponent:Home},
  {path:'/home', renderFunction:() => <Redirect to={'/'} />},
  {path:'/about', renderComponent:About},
  {path:'/reducer', renderComponent:Reducer},
  {path:'/contact', renderComponent:Contact},
  {path:'/admin', renderFunction:() => <Admin appState={appState} />},
  {path:'/login', renderFunction:() => <Login appState={appState} />},
].filter((item,key) => item.path === path)[0])

const routesFromApi = () => ([ // COMES FROM API
  {exact:true, path:'/'},
  {exact:false, path:'/home'},
  {exact:false, path:'/about'},
  {exact:false, path:'/reducer'},
  {exact:false, path:'/contact'},
  {exact:false, path:'/admin'},
  {exact:false, path:'/login'},
])

const combineRoutesPath = (routes) => (
  routes.map(item => (
    {...item, ...routesIndex(item.path)}
  ))
)

const Routers = ({routes}) => (
  <div className="views">
    <Switch>
      {
        combineRoutesPath(routes).map(({exact, path, renderComponent, renderFunction}, key) => {
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
        })
      }
      <Route render={() => <h1>404 Error</h1>} />
    </Switch>
  </div>
)

// application entry component
export default (props) => {
  return(
    <Router>
      <div>
        <NavLinks />
        <Routers routes={routesFromApi()}/>
        <div>Hola ...</div>
      </div>
    </Router>
  )
}
