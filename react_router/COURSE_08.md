# React Router | 08

## Preventing transitions with React Router

Respecting your user's input is not only a solid business decision, but
it also shows you care about little UX details. One of the most
frustrating experiences a user can have is when they spend time inputting
data into your app, accidentally hit a hotkey and navigate away from the
current route, then have to restart the form all over. There's a few
different approaches to fixing this bad UX but in this post we'll focus
on how React Router can help by warning before a route transition.

Before we can see how it's done, we'll need the basic skeleton of an app.
Our app will be pretty straight forward. It will have a few different 
routes - one of which will render a form.

```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class Form extends React.Component {
  render() {
    return (
      <form>

      </form>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Form</Link></li>
            <li><Link to="/one">One</Link></li>
            <li><Link to="/two">Two</Link></li>
          </ul>
          <Route path="/" exact component={Form}/>
          <Route path="/one" render={() => <h3>One</h3>}/>
          <Route path="/two" render={() => <h3>Two</h3>}/>
        </div>
      </Router>
    )
  }
}

export default App
```

Now the goal is to make it so if the form is "dirty" and the user tries 
to navigate away, we verify that's what they're really trying to do.

What I love about React Router is its dedication to declarative, "React 
like" code. The fundamental aspect of React is 
`user event -> state change -> re-render`.
With that in mind, it would make sense that the "React way" of 
preventing transitions follows that same paradigm - a declarative 
component we can render (or not) based off of the component's state.

First, as mentioned, let's add some state to the `Form` component. The goal
here is to have some state which knows if the form is "dirty" (meaning 
the length of the value in the input field is > 0).

```
class Form extends React.Component {
  state = {
    isBlocking: false
  }
  render() {
    return (
      <form>
        <p>
          Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={(event) => this.setState(() => ({
              isBlocking: event.target.value.length > 0
            }))}
          />
        </p>
      </form>
    )
  }
}
```

Solid. So now we have a property on our state which tells us if we should
warn the user before they transition away from the current route.

Next, we need to actually make it so the user is prompted. Conveniently,
React Router comes with a `Prompt` component that serves this exact
purpose. It takes in two props - `when` and `message`. `when` needs to be a
boolean that when true, will show the user a prompt with the `message`
prop when they try to navigate away. We've already added an `isBlocking`
property to our state, so we can pass that to `Prompt`'s `when` prop.

```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt,
} from 'react-router-dom'

...

class Form extends React.Component {
  state = {
    isBlocking: false
  }
  render() {
    const { isBlocking } = this.state

    return (
      <form>
        <Prompt
          when={isBlocking}
          message={(location) => `Are you sure you want to go to ${location.pathname}`}
        />

        <p>
          Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={(event) => this.setState(() => ({
              isBlocking: event.target.value.length > 0
            }))}
          />
        </p>
      </form>
    )
  }
}
```

Now if there's anything in the input field, the `Prompt` component will
warn the user if they try to navigate away from the current page.

Lastly, let's finish the example by actually adding a `button` to our
form and resetting `isBlocking` when the form is submitted.

```
class Form extends React.Component {
  state = {
    isBlocking: false
  }
  render() {
    const { isBlocking } = this.state

    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        event.target.reset()
        this.setState(() => ({
          isBlocking: false
        }))
      }}>
        <Prompt
          when={isBlocking}
          message={(location) => `Are you sure you want to go to ${location.pathname}`}
        />

        <p>
          Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={(event) => this.setState(() => ({
              isBlocking: event.target.value.length > 0
            }))}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    )
  }
}
```

## Recursive paths with React Router

Recursive routes aren't the most pragmatic thing in the world, but they
really show off the benefits of React Router's component based approach
to routing.

The main idea here is that since React Router is just components,
theoretically, you can create recursive and therefor infinite routes.
The secret lies in setting up the right data structure which can lead to
infinite routes. In this example we'll use an array of people who all
have an id, a name, and an array of friends.

```
const users = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]
```

By having this data structure set up this way, when we render a Person,
we'll render all of their friends as `Link`s. Then, when a `Link` is clicked,
we'll render all of that person's friends as `Link`s, and on and on. Each
time a `Link` is clicked, the app's pathname will become progressively
longer.

Initially, we'll be at `/` and the UI will look like this

Michelle's Friends

  * Sean
  * Kim
  * David

If Kim is clicked, then the URL will change to `/2` (Kim's ID) and the
UI will look like this

Michelle's Friends

  * Sean
  * Kim
  * David

Kim's Friends

  * Michelle
  * Sean
  * David

If David is clicked, then the URL will change to `/2/3` (Kim's id then
David's id) and the UI will look like this

Michelle's Friends

  * Sean
  * Kim
  * David

Kim's Friends

  * Michelle
  * Sean
  * David

David's Friends

  * Sean
  * Kim

And this process repeats for as long as the user wants to click on `Link`s.

Once you have the right data structure set up, the next important step
is to continually render a Route and some `Links`s. Because we're creating
infinite routes, we'll need to make sure we have a `Route` that is
rendered every time a `Link` is clicked. If not, we won't get any more
matches which means React Router won't render any more components. In
both our `Link` and our `Route` we'll need to know the app's current
pathname so that we can append to it every time a `Link` is clicked
(like in the example above, we went from /2 to /2/3, and on).
Luckily for us, React Router gives us the pathname with `match.url`.
With that in mind, the initial part of our `Link` will look like this

```
<Link to={`{match.url}/${id}}>
```

and the `Route` we render will match on a similar pattern then render
the same component.

```
<Route path={`${match.url}/:id`} component={Person}/>
```

Now that we have the basics down, let's start building out the component
which is going to be recursively rendered, `Person`.

Remember, there's a few things this component needs to be responsible
for.

    1. It should render a `Link` component for every one of that specific
    person's friends.
    2. It should render a `Route` component which will match for the
    current `pathname + /:id`.

As with all recursive problems, we need to somehow "kick off" the
recursion. Typically this involves invoking the function but if it's a
component that's being called recursively, we can do that by simply
creating the element.

```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const users = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]

const Person = ({ match }) => {
  return (
    <div>
      PERSON
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Person />
      </Router>
    )
  }
}

export default App

Now what we need to do is figure out how to get the specific friend's information from our users array so we can grab their name and render their friends. You may notice a problem here. Eventually Person is going to be rendered by React Router so it'll be passed a match prop. It's this match prop we'll use to get the current pathname and (with help from users) the person's name and friends list. The problem is we're rendering Person manually inside the main App component to kick off the recursion. That means match is going to be undefined the first time Person is rendered. The solution to this problem is simpler than it may seem. When we first manually render <Person /> we'll need to pass it a match prop just as React Router would.

class App extends React.Component {
  render() {
    return (
      <Router>
        <Person match={{ params: { id: 0 }, url: '' }}/>
      </Router>
    )
  }
}
```

Now, everytime `Person` is rendered, including the first time, it'll be
passed a match prop which will contain two things we need, url for
rendering our `Route` and `Link`s and `params.id` so we can figure out
which person is being rendered.

Alright back to the main goal at hand. Person needs to

    It should render a Link component for every one of that specific person's friends.
    It should render a Route component which will match for the current pathname + /:id.

Let's tackle #1. Before we can render any `Link`s, we need to get the
person's friends. We already know the person's id from match.params.id.
Using that knowledge with the `Array`.find method means getting the
friends info should be pretty straight forward. We'll create a helper
function for it.

```
const users = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]

const find = (id) => users.find(p => p.id == id)

const Person = ({ match }) => {
  const person = find(match.params.id)

  return (
    <div>
      PERSON
    </div>
  )
}
```

Slowly getting there. Now we have the person, let's render some UI
including the `Link` for each of their friends.

```
const users = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]

const find = (id) => users.find(p => p.id == id)

const Person = ({ match }) => {
  const person = find(match.params.id)

  return (
    <div>
      <h3>{person.name}'s Friends</h3>
      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

We're so close to being done. Now that we have a `Link` for each of the
person's friends, as mentioned in #2, we need to make sure we also
render a `Route`.

```
const Person = ({ match }) => {
  const person = find(match.params.id)

  return (
    <div>
      <h3>{person.name}'s Friends</h3>
      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person}/>
    </div>
  )
}

The full code now looks like this

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const find = (id) => users.find(p => p.id == id)

const users = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]

const Person = ({ match }) => {
  const person = find(match.params.id)

  return (
    <div>
      <h3>{person.name}'s Friends</h3>
      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person}/>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Person match={{ params: { id: 0 }, url: '' }}/>
      </Router>
    )
  }
}

export default App
```

The first time `Person` is rendered, we pass it a mock match object. Then,
`Person` renders a list of `Link`s as well as a `Route` matching any of
those `Link`s. When a `Link` is clicked, the `Route` matches which renders
another `Person` component which renders a list of `Link' s and a new
`Route`. This process continues theoretically forever as long as the user
continues to click on any `Link` s.

## Route Config with React Router

React Router v4 introduced a declarative, component based approach to
routing - moving away from a static route config. Though there are many
benefits to this approach, there are some benefits to having a central
route config. Because React Router >= v4 is “just components” and
therefore “just javascript”, having a central route config with React
Router is still very much possible. The key? Having your routes
represented as an array.

```
const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
  }
]
```

Now that your routes are centralized to an array, in order to render any
routes, you map over the array.

```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Sandwiches = () => <h2>Sandwiches</h2>
const Tacos = () => <h2>Tacos</h2>

const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
  }
]

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/tacos">Tacos</Link></li>
            <li><Link to="/sandwiches">Sandwiches</Link></li>
          </ul>

          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </div>
      </Router>
    )
  }
}
```

Wow, look at that. We've used the powers of JavaScript to create a
central route config.

Now what if we wanted to have some nested routes? The first thing we
would need to do is add some nested routes to our route config array.
For our example, let's say the `/tacos` route is going to render some
child routes - `/tacos/bus` and `/tacos/cart`.

```
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]
```

Now that we've added some nested routes to our route config, we need to
modify the way we're mapping over them to support the nested routes.
The idea here is that when we map over our `routes` array, for each item
we're going to render a `Route` component as we did before, but now,
instead of just rendering the component, we're going to pass any child
routes that component, so that it can also render the child routes.

That was a little wordy so let's take a look at some code. Because
we've added a little complexity to how we're rendering the Route
components, let's abstract that to a new component called
`RouteWithSubRoutes`.

```
const RouteWithSubRoutes = (route) => (
  <Route path={Route.path} />
)

...
render() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/tacos">Tacos</Link></li>
          <li><Link to="/sandwiches">Sandwiches</Link></li>
        </ul>

        {routes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </div>
    </Router>
  )
}
```

Now, as mentioned earlier, we need to pass the component that's being
rendered any child routes so that it can also render those. Because we
need to pass the component being rendered a prop, we'll use React
Router's render prop.

```
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={(props) => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)
```

Solid. Now, any time a `Route` renders a component, that component will
be passed any child routes that may or may not exist as a `routes` prop.

Now, the only thing left to do is modify our `Tacos` component to receive
those child routes and, for each item in routes, render a
`RouteWithSubRoutes` component.

```
const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
    </ul>

    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
  </div>
)
```

To recap, by representing our routes as an array, we were able to create
a central route config for our app. Also, when we created
the `RouteWithSubRoutes` component, that component would pass any child
routes down to the component that's being rendered, so that the rendered
component could also render the child routes (as seen in `Tacos`.)

The full code for this example looks like this

```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
    </ul>

    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
  </div>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={(props) => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/tacos">Tacos</Link></li>
            <li><Link to="/sandwiches">Sandwiches</Link></li>
          </ul>

          {routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </div>
      </Router>
    )
  }
}
```
