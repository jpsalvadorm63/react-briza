import React from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

const Child = ({match}) => (
    <h3>ID: {`${match.params.id}`}</h3>
)

const App011 = () => (
  <div className="App">
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li><Link to={'/netflix'}>Netflix</Link></li>
          <li><Link to={'/zillow-group'}>Zillow Group</Link></li>
          <li><Link to={'/yahoo'}>Yahoo</Link></li>
          <li><Link to={'/modus-create'}>Modus Create</Link></li>
        </ul>

        <Route exact path={'/'} render={() => (<h3>Please Select an option</h3>)}/>
        <Route exact path={'/:id'} component={Child}/>
      </div>
    </Router>
  </div>
)

export default App011;
