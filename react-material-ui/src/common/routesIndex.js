import React from 'react'
import {Redirect} from 'react-router-dom'
import Home from 'src/ducks/Landing/Widget'
import Login from 'src/ducks/Login/Widget'

export const routesIndex = [
  {path:'/', renderComponent:Home},
  {path:'/home', renderFunction:() => <Redirect to={'/'} />},
  {path:'/login', renderComponent:Login},
]
