import React from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

const Topic = ({match}) => console.log("=> match = ",match) || (
  <div>
    <h2>topicId = {match.params.topicId} or {match.params['topicId']}</h2>
  </div>
)

const Home = () => (<div><h2>Home</h2></div>)
const Topics = ({match}) => (console.log("=> url = ", match.url)) || (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>rendering</Link></li>
      <li><Link to={`${match.url}/components`}>components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>props-v-state</Link></li>
    </ul>
    <Route exact path={`${match.url}`} render={() => (
      <h3>Please select a topic</h3>
    )} />
    <Route path={`${match.url}/:topicId`} component={Topic} />
  </div>
)
const About = () => (<div><h2>About</h2></div>)

const App02 = () => (
  <div className="App">
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </div>
)

export default App02;
