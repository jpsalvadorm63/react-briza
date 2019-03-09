import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./app024.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

// fallowing https://itnext.io/basics-of-react-router-v4-336d274fd9e0

const Home = () => <h1>Home Component</h1>;
const About = () => <h1>About Component</h1>;
const Contact = () => <h1>Contact Component</h1>;
const Admin = () => <h1>Admin Component</h1>;
const Login = () => <h1>Login Component</h1>;

const NavLinks = () => {
  return(
    <div>
      <div className="links">
        <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/contact" className="link">Contact Us</NavLink>
        <NavLink to="/admin" className="link">Admin</NavLink>
      </div>

      <div className="views">
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/contact" component={ Contact }/>
          <Route path="/admin" component={ Admin }/>
          <Route path="/login" component={ Login }/>
          <Route render={ () => <h1>404 Error</h1> } />
        </Switch>
      </div>
    </div>
  );
}

class App024 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Hello World!</h1>
          <NavLinks />
        </div>
      </Router>
    );
  }
}

export default App024
