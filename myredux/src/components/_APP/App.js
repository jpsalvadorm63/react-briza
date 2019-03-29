import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

import "../_CSS/app024.css"

// views
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Login from "../Login/Login"
import Logout from "../Logout/Logout"

const App = () => {
  return (
    <div className="App">
      <p>Hola Mundo</p>
    </div>
  )
}

export default App;
