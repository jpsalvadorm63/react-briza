import React from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

const Topic1 = () => (<div><h2>topic 1</h2></div>)
const Topic2 = () => (<div><h2>topic 2</h2></div>)
const Topic3 = () => (<div><h2>topic 3</h2></div>)

const Home = () => (<div><h2>Home</h2></div>)
const Topics = () => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to='/topics/rendering'>rendering</Link></li>
      <li><Link to='/topics/components'>components</Link></li>
      <li><Link  to='/topics/props-v-state'>props-v-state</Link></li>
    </ul>
    <Route path='/topics/rendering' component={Topic1} />
    <Route path='/topics/components' component={Topic2} />
    <Route path='/topics/props-v-state' component={Topic3} />
  </div>
)
const About = () => (<div><h2>About</h2></div>)

const App001 = () => (
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

export default App01;
