# React Router | 04

## Query Strings support with React Router

When you're building for the web, if you want to pass information via the URL
(and it doesn't make sense to use a `URL parameter`), you'd use a query string.

You've probably seen this before IRL. Here's an example from Twitter's analytics
page that we'll use throughout this post.

![Strings](courseImages/strings.jpg)

This URL has three route parameters and two query strings. Twitter is using
query strings to tell its route to `filter` the Tweets by `top` (most popular)
and that the `origin` was `im` (which I'm not sure what that means TBH). With
that said, odds are you're not here to learn what query strings are but instead
how to use them with React Router. The good news is that if you're already
comfortable with React Router, there's just a few small details you need to
know.

Let's say we were Twitter and we were building the `Route` for the URL above.
It may look something like this

```
<Route path={'match.path/tweets'} component={Tweets} />
```

Notice at this point there's nothing new. We don't have to account for the
query string when we create the `Route`. All we need to do is parse them inside
the component that is being rendered when that path matches - in this case,
`Tweets`.

>    Again, we're assuming the URL looks like this
https://analytics.twitter.com/user/tylermcginnis/tweets?filter=top&origin=im

```
class Tweets extends Component {
  componentDidMount() {
    // How do we get the values for filter and origin?
  }
  render() {
    ...
  }
}
```

Now the question becomes, how do we get access to the query string values
from the URL? If you poke around on the `location` object that is passed to
all components rendered by React Router, you'll notice that it has a search
property on it.

```
componentDidMount() {
  console.log(this.props.location.search) // "?filter=top&origin=im"
}
```

Cool, but this is the literal query **string**. You'll need to somehow parse it
before you can get the actual values. You may be surprised to hear that React
Router doesn't come with built in with support for parsing query strings.
The reason for this is because, over the years, there have been many requests
to support different implementations. With that, the team decided it would
be best for users to decide what the implementation looks like rather than baking
in a "one size fits all" solution. Regardless, what that means is that you'll
need to use a [browser API](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) (that may not be supported by all the browsers you
need) or use an external library for parsing the query string. The library
I typically use is the [query-string](https://www.npmjs.com/package/query-string) library on NPM.

With that library installed, all we need to do is call `queryString.parse`
passing in our `location.search`. That will parse the query string into an
object which we can then grab the values off of.

```
import queryString from 'query-string'
...
componentDidMount() {
  const values = queryString.parse(this.props.location.search)
  console.log(values.filter) // "top"
  console.log(values.origin) // "im"
}
```

That's it. Go parse those query strings.

## Handling 404 pages (catch all routes) with React Router

A common use case for when you're building an app with React Router is to
have a “catch all” route that will be rendered if none of your other routes
match. A good example of this is if you wanted your client side router to
render a 404 page. In order to see how this works, let's first render a navbar
with the following paths - `/` , `/will-match`, `/will-not-match`,
and `/also/will/not/match`.

```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render() {
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/will-match">Will Match</Link></li>
          <li><Link to="/will-not-match">Will Not Match</Link></li>
          <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
        </ul>
      </div>
    </Router>
  }
}

export default App
```

Now that we have the navbar set up, let's create three different components
to render - `Home.js`, which will match on `/`, `WillMatch` which will match on
 `/will-match`, and `NoMatch`, which will be the catch all component which will
 render if none of the other route's match.

```
const Home = () => (
  <h1>
    Home
  </h1>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
```

Now that we have the components which are going to be rendered, we need to
actually render some `Routes`. `Home.js` and `WillMatch` are straight forward.
They just get rendered as they normall would.

```
render() {
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/will-match">Will Match</Link></li>
        <li><Link to="/will-not-match">Will Not Match</Link></li>
        <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
      </ul>

      <Route path="/" exact component={Home}/>
      <Route path="/will-match" component={WillMatch}/>
    </div>
  </Router>
}
```

But how do we render `NoMatch`? Here's one tip that will get us closer. If
you render a `Route` but don't specify a `path` prop, that route will always
be rendered. Knowing that, we could throw a new `Route` with no `path` that
rendered `NoMatch` at the end of our routes?

```
<Route path="/" exact component={Home}/>
<Route path="/will-match" component={WillMatch}/>
<Route component={NoMatch} />
```

Ok, cool. But it still doesn't work. Now the app renders the `Home.js` and `WillMatch`
components properly but it also always renders the `NoMatch` component no matter
what path we're on, because the `Route` has no `path`, and if it has no `path`, it will
always be rendered…

What we need is a way to tell React Router that we only want to render the
first `Route` that matches, even if there's more than one match. This way,
if the `/` or `/will-match` paths match, the router will render the associated
component, and if not, it will render the `NoMatch` component. The good news
is React Router comes with a component that does exactly this and it's called
`Switch`. All we need to do is wrap our `Routes` inside of a `Switch` then just
as we wanted, only the first match will ever be rendered.

```
render() {
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/will-match">Will Match</Link></li>
        <li><Link to="/will-not-match">Will Not Match</Link></li>
        <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/will-match" component={WillMatch}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
}
```

Now if the user isn't at `/` or `/will-match`, the `NoMatch` component will be
rendered.

