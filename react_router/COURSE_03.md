# React Router | 03

## Pass props to a component rendered by React Router

React Router uses a declarative, component based approach to routing. What
that means is when you want to create a new route, you render a `Route` component.
If you're familiar with React Router you know that to do that, you pass `Route`
a `path` and a `component` to render when the app's location matches that `path`.

```
<Route path='/dashboard' component={Dashboard} />
```

Now, what if we also wanted to pass `Dashboard` a prop? There's a few different
ways to solve this problem but only one right way. The first idea you might
have is to just pass it as a prop on `Route`.

```
<Route
  path='/dashboard'
  component={Dashboard}
  isAuthed={true}
/>
```

Unfortunately, this won't work. React Router won't forward that prop onto 
the component. Instead, it will just ignore it.

The next idea you might have, and a pattern I've seen a few places is to
pass `component` an inline function that creates the element.

```
<Route
  path='/dashboard'
  component={() => <Dashboard isAuthed={true} />}
/>
```

Though technically this will work, it's not the best solution. The reason
for this is because of performance. According to the offical docs…

>    "When you use the component props, the router uses React.createElement
to create a new React element from the given component. That means if you
provide an inline function to the component attribute, you would create a
new component every render. This results in the existing component unmounting
and the new component mounting instead of just updating the existing component."

So if you're not supposed to pass a function to `component`, what's the solution?
Turns out the React Router team predicted this problem and gave us a handy
solution. Instead of using `component`, use the `render prop`. `render` accepts a
functional `component` and that function won't get unnecessarily remounted like
with `component`. That function will also receive all the same props that `component`
would receive. So you can take those and pass those along to the rendred component.

```
<Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>
```

So to recap, if you need to pass a prop to a component being rendered by React
Router, instead of using `Route`s `component` prop, use its `render` prop passing
it an inline function then pass along the arguments to the element you're
creating.

## Programmatically navigate using React Router

What I love about React Router is its dedication to declarative, "React like" code. 
React Router v4 is truly a React router. The whole goal of the redesign to React Router 
v4 was to align React Router's vision with React's. Fundamentally, what this means 
is that the same principles and thought processes that apply to React should also 
apply to React Router.

If you broke React down into three core principles, you'd get component composition, 
declarative UI, and state management, specifically, user **event -> state change -> re-render**.
Because React Router's vision is aligned with React's, programmatically navigating with 
React Router should, by definition, align with those three core concepts. The reason 
I'm emphasizing this is because the initial reaction to what's coming next will 
most likely be negative.

The primary way you programmatically navigate using React Router v4 is by using
a `<Redirect />` component.

Let's look at an example then we'll walk through more of why this isn't as 
crazy as it may first appear.

The typical use case for routing programmatically is routing on some sort 
of user event (that isn't a `Link` click). So in our example, let's navigate
the user to `/dashboard` once they've registered for our app.

```
class Register extends React.Component {
  state = {
    toDashboard: false,
  }
  handleSubmit = (user) => {
    saveUser(user)
      .then(() => this.setState(() => ({
        toDashboard: true
      })))
  }
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
```

After reading that, there's at least a small chance that you hate it. Instead 
of using an imperative API (`history.push`), we're using a declarative `Redirect`
component. Again, the reason for this is because it aligns exactly with the 
principles of React itself.

`<Redirect />` is

*    Composable
*    Declarative
*    user event -> state change -> re-render

What are the downsides to this approach? The most often heard criticism 
is that you need to create a new property on the component's state in order 
to know when to render the `Redirect`. That's valid, but again, that's pretty
much the whole point of React - state changes update the UI. "It's more typing", 
yes. Naturally by explicitly defining and modifying your state, you have to 
type more. My argument is explicit state leading to a declarative API is better 
than implicit state handled by an impertive API.

### Steps off high horse

Let's take a look at the other approach now.

The real work horse of React Router is the `History` library. Under the hood
it's what's keeping track of session history for React Router. When a component 
is rendered by React Router, that component is passed three different props: 
`location`, `match`, and `history`. This history prop comes from the `History` library
and has a ton of fancy properties on it related to routing. In this case, 
the one we're interested is `history.push`. What it does is it pushes a new
entry onto the history stack - aka _redirecting the user to another route_.

Going back to our example earlier, assuming the Register component is being 
rendered by React Router, our code could look like this

```
class Register extends React.Component {
  handleSubmit = (user) => {
    saveUser(user).then(() =>
      this.props.history.push('/dashboard')
    ))
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
```

Easy peasy. Worse, IMO. But easy peasy .

Now, what if the Register component wasn't being rendered by React Router? 
(Meaning, we're not passing Register as a component prop to a `Route`. Instead,
we're just rendering it ourselves like `<Register />`). If it's not rendered 
by React Router, then we won't have access to history.push. The team thought 
of this use case so React Router comes with a handy HOC called `withRouter`.
Going back to our `Register` code above, by adding `withRouter`, it would look
like this

```
import {
  withRouter
} from 'react-router-dom'

class Register extends React.Component {
  handleSubmit = (user) => {
    saveUser(user).then(() =>
      this.props.history.push('/dashboard')
    ))
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default withRouter(Register)
```

<br/>

<hr/>

There are two ways to programmatically navigate with React Router -
`<Redirect />` and `history.push` o `history.replace`. Which you use is mostly up to you and
your specific use case, though I try to favor `Redirect`.

<hr/><br><br>


A whole sample using `<Redirect to={<some route>} />`

```
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

const Exit = ({match}) => (<Redirect to={"/"} />)

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
```

## A whole sample using `this.props.history.push('/<some route>')`

### Fallowing

[from](https://itnext.io/basics-of-react-router-v4-336d274fd9e0)

### The main App

```
import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

// styles
import "../css/app024.css"

// views
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Admin from "./Admin"
import Login from "./Login"

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
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/contact" className="link">Contact Us</NavLink>
      <NavLink to="/admin" className="link">Admin</NavLink>
    </div>
  )
}

const Routers = () => {
  return (
    <div className="views">
      <Switch>
        <Route exact={ true } path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/contact" component={ Contact }/>
        <Route path="/admin" render={() => <Admin appState={appState}/>} />
        <Route path="/login" render={() => <Login appState={appState}/>} />
        <Route render={ () => <h1>404 Error</h1> } />
      </Switch>
    </div>
  )
}

// application entry component
const App = () => {
  return(
    <Router>
      <div>
        <NavLinks />
        <Routers />
      </div>
    </Router>
  )
}

export default App
```

### the 'Home' component, `Widgetet.js`

```
import React from 'react';

const Home = () => <h1>Home Component ...</h1>

export default Home
```

### the 'About' component, `Widgett.js`

```
import React from 'react';

const About = ( props ) => <h1>About Component ...</h1>

export default About
```

### the 'Contact' component, `Contact.js`

```
import React from 'react'
import {
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import "../css/app024.css"

const ContactInfo = ( props ) => (
  <h1>
    Welcome to { props.match.params.location } office.
  </h1>
)

const Contact = ( props ) => (
  <div>
    <h1>Contact Component</h1>

    <div className="links">
      <NavLink to={ `${props.match.url}/india` } className="link">India Office</NavLink>
      <NavLink to={ `${props.match.url}/us` } className="link">Us Office</NavLink>
    </div>

    <Switch>
      <Route exact path={ props.match.url } render={ () => <h4>Please select an office.</h4> }/>
      <Route path={ `${props.match.url}/:location(india|us)` } component={ ContactInfo }/>
      <Route render={ () => <h2>No office found</h2> }/>
    </Switch>
  </div>
)

export default Contact
```

### the 'Admin' component, `Admin.js`

```
import React from "react"
import {Redirect} from "react-router-dom"
import { withRouter } from "react-router"

const Admin = ({appState, history}) => {
  const logout = () => {
    appState.logout()
    history.replace( '/login' )
  }

  return (
    appState.loggedIn ? (
      <div>
        <h1>Admin Component</h1>
        <button onClick={logout}>Logout</button>
      </div>
    ) : <Redirect to="/login" />
  )
}

export default withRouter(Admin)
```

### the 'Login' component, `WidgetLogin.js`

```
import React, { useState, useEffect } from "react"
import {Prompt} from "react-router-dom"
import { withRouter } from "react-router"

const Login = ({appState, history}) => {
  const [state, setState] = useState({
      password:"",
      showPromptOnNav: false,
      allowed: false
  })

  useEffect((previous) => {
    console.log("22 ===> ", previous, JSON.stringify(state))
    if(state.allowed) {
      appState.login()
      history.replace( '/admin' )
    }
  })

  const targetPasword =  'password'

  const savePassword = ( event ) => {
    setState({
      ...state,
      password: event.target.value,
      showPromptOnNav: event.target.value.length > 0
    })
  }

  const handleFormSubmit = ( event ) => {
    event.preventDefault()
    if(state.password === targetPasword) {
      setState({
        ...state,
        showPromptOnNav: false,
        allowed: true
      })
    }
    else{
      alert('Password is wrong.')
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Please sign in</h3>

      <input
        type="password"
        placeholder="Type password"
        value={ state.password }
        onChange={ savePassword}
      />

      <button type="submit">Submit</button>

      <Prompt
        when={ state.showPromptOnNav }
        message={"Are you sure? Your data will be lost."}
      />
    </form>
  )
}

export default withRouter(Login)
```