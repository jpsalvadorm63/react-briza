import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from "./styles"
import {NavLink, RGB, HSL} from "./NavLink"
import "../css/app024.css"

const App025 = () => {
  return (
    <Router>
      <Route render={({ location }) => (
        <div style={styles.fill}>
          <Route exact path="/" render={() => (
            <Redirect to="/hsl/10/90/50"/>
          )}/>

          <ul style={styles.nav}>
            <NavLink to="/hsl/10/90/50">Red</NavLink>
            <NavLink to="/hsl/120/100/40">Green</NavLink>
            <NavLink to="/rgb/33/150/243">Blue</NavLink>
            <NavLink to="/rgb/240/98/146">Pink</NavLink>
          </ul>

          <div style={styles.content}>
            <TransitionGroup>
              <CSSTransition
                key={location.key} classNames="fade" timeout={1000} >
                <Switch location={location}>
                  <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                  <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}/>
    </Router>
  )
}

export default App025
