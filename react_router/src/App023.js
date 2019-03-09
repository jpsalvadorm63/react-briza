import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const Home = ({match}) => (<h3>I'm home now ...</h3>)

const Child = ({match}) => (<h3>ID: {`${match.params.id}`}</h3>)

const Exit = () => (<Redirect to={"/"} />)

const App023 = () => (
  <div className="App">
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li><Link to={'/home'}>go home now</Link></li>
          <li><Link to={'/opt/netflix'}>Netflix</Link></li>
          <li><Link to={'/opt/zillow-group'}>Zillow Group</Link></li>
          <li><Link to={'/exit'}>exit</Link></li>
        </ul>

        <Route exact path={'/'} render={() => (<h3>Please Select an option</h3>)} />
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/opt/:id'} component={Child} />
        <Route exact path={'/exit'} component={Exit} />
      </div>
    </Router>
  </div>
)

export default App023
