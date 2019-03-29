---
* React Router | 01
---

# Introduction

Welcome to the React Router course!

Just some important items before you get started.

1) Everyone learns differently. The whole premise of this course
(as well as the other courses) is that you're able to see each new piece
of information from different mediums. This course is different from the
others in that a lot of the video and text sections are similar. My
goal here is that by being exposed to the material twice (once in each
medium), you'll more effectively master the material.

2) Once you get to the project section, we'll be building a project
together and every video corresponds with a different branch on the
Github repo. If you get stuck or your code isn't working, refer to the
repo.

3) Along the same lines as #2, if you'd like to see the commit log
progression from video to video, you can see that here.

4) Unlike the other courses, there is no curriculum for this course. The
best approach to getting "hands on" with the code is, during the project
sections, watch me build the portion of the project, then immediately
try to implement that section yourself. If you're brave, you can invert
that flow. Try to code the section yourself then watch me code it.

5) If you haven't already, request to join our official private Facebook
Group for subscribers. It's where myself and other members of the team
will be hanging out answering support questions.

Good luck!

Tyler McGinnis

# [LINK](https://github.com/tylermcginnis/React-Router-Course-Project)

# Introduction and Philosophy behind React Router

If you’ve been in React land for the last few years, you know that React Router has gone 
through a few different iterations. Say what you will, but it’s clear that the React Router 
we have today (v4) is a huge improvement on previous versions. The reason for these 
changes are pretty standard - the authors today are more experienced React developers 
than they were when React Router was first built. You see, back in 2014, everyone was 
new to React. React itself was still under a year old and no one really knew to what 
extent this whole component thing would play out.

At the time, both Michael and Ryan (the creators of React Router) were coming from 
Ember backgrounds. So naturally, the first version of React Router was similar in nature 
to that of Ember’s router. That is, with both routers you’d establish your routes statically 
as part of the app’s initialization process. In fact, mostly all of the router’s you’re probably 
familiar with are used this way - Express, Angular, Ember. Even React Router pre version 4 
used static routes as well. Here’s some code from React Router before version 4. 
Typically you’d have a routes.js file where you’d establish your static routes.

```
// routes.js

const routes = (
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' component={Prompt} />
      <Route path='playerTwo/:playerOne' component={Prompt} />
      <Route path='battle' component={ConfirmBattle} />
      <Route path='results' component={Results} />
      <Route onEnter={checkAuth} path='dashboard' component={Dashboard} />
    </Route>
  </Router>
)

export default routes
```

Then, when you’d initialize your app, you’d import your routes and render them.

```
// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'

ReactDOM.render(routes, document.getElementById('app'))
```

This brings up the question, “is static routing bad?”. The answer to that is obviously, no. 
One could argue it’s not really the “React way” of doing things though. Since its creation, 
not only have the creators of React Router become more experienced in the intricacies 
of building a router, but they’ve naturally also gained more experience with React itself, 
so much so their full time jobs are to teach it. What they found during their workshops 
was that the principles they taught about React, like component composition, didn’t align 
with the actual API of React Router. Not only that, but in some places they were actually 
competing with the React API. Looking back at the previous example, we pass an `onEnter`
 prop to the `<Route>` component.

```
<Route onEnter={checkAuth} path='dashboard' component={Dashboard} />
```

The idea here is that before the user sees the Dashboard component, the `checkAuth` 
function verifies the user is authenticated. Well, doesn’t that sound similar to what 
should happen inside of Dashboard's componentDidMount lifecycle hook? It is.

With previous versions of React Router, it was more of a router for React than an actual 
React router. React Router v4 was built fix these inconsistencies and work with React, 
rather than against it. If you’re already familiar with the benefits of React and the benefits 
of component composition, React Router v4 is going to make you feel at home - you just 
need to forget everything you know about traditional static routers.

Now the question is why is it that React Router v4 aligns nicely with React when previous 
versions fought against it? The answer is because it ditched static routing in favor of dynamic 
routing and the entire API is just components. What that means is that you declare your 
routes as part of your application just like you would any other component.

Let’s take a look at some code.

The goal here is to start out with some very basic code, then slowly add routing functionality to it. 
Here’s our starting code.

```
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        React Rotuer Course
      </div>
    )
  }
}

export default App
```

As I mentioned earlier, React Router v4 is “just components”. So the first thing we’ll need to do is 
import the ones we’ll need.

```
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
```

A few things to note here. First, we’re importing BrowserRouter and renaming it Router. That’s not 
necessary, but it’s pretty common. What BrowserRouter does is it allows React Router to pass the 
app’s routing information down to any child component it needs (via context). So to make React 
Router work, you’ll need to render BrowserRouter at the root of your application.

```
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          React Rotuer Course
        </div>
      </Router>
    )
  }
}

export default App
```

Next we have Route. Route is both the backbone and the genius behind React 
Router v4. When the app’s location matches a certain path, Route will render 
a specified component, when it doesn’t, it will render null. So say for example 
we had a widget.jsjs component that we wanted to render when our app was at 
the index path `/`. Our code would look something like this

```
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Home = () => (
  <h2>Home</h2>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
        </div>
      </Router>
    )
  }
}

export default App
```

With the code above, if were were at the index page (`/`), we would see the 
`Widgetet.js` component. If we weren’t, we wouldn’t see anything (because 
Route would have rendered null).

Let’s add a few more routes now.

```
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    )
  }
}

export default App
```

Notice that if we want to add more routes to our app, we just render 
more Route components. Again, this may feel a little weird to your brain 
if you’re coming from static based routers since we’re literally rendering 
our routes. One thing that helped me was to remember Route is just a normal 
React component with a render method. That render method is either 
rendering the component or it’s rendering null depending on if the path matches. 
So when we render multiple Route components like we’re doing above, those 
will either render the component or just render `null`.

So far, so good. One caveat that you might not have seen from the above code 
is that right now if you run the app and you head to the `/about` path, you’ll notice 
that both the Widget component and the widget.jsjs component are rendered.
This is because even though / doesn’t match the location exactly, it’s still considered 
a partial match so the Widgetet.js component is rendered. To get around this, you 
simply need to add an exact prop to the / Route to specify that you only want it 
to match when the location matches exactly.

```
<Route exact path='/' component={Home} />
```

Now that we’re dynamically rendering UI based on the app’s location, the next 
thing we need to do is have some way for the user to change the apps location. 
This is where the Link component comes into play. It’s a simple component that 
allows the user to declaratively navigate around the app. Now, using Link, let’s 
add a simple navbar to our app.

```
render() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>

        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
      </div>
    </Router>
  )
}
```

At this point, we’ve covered the absolute fundamentals of React Router v4. 
We’re dynamically changing the UI based on the location by rendering a few 
different Route components and we’re able to change the location of our app 
by rendering a few different Link components. Let’s go a little deeper and talk 
about nested routes. Nested routes were a fundamental aspect of previous 
versions of React Router and they continue to be today. The biggest difference 
is the way in which you go about creating nested routes now compared to previous 
versions of React Router. In previous, static versions, you’d just nest routes in your
 route config. Because React Router v4 is all about dynamic routing, you can’t do 
 that. However, in my opinion, nested routes with React Router v4 is much more 
 intuitive than with previous versions. Again, the key is to forget what you knew 
 previously.

Looking back at our example, what if we wanted the Topics component to render 
a nested navbar and some nested routes? The answer to that doesn’t need to be 
complicated. Just like you would nest a div, you can nest Routes.

```
const Topic = () => {
  <div>
    <h3>TOPIC</h3>
  </div>
}

const Topics = () => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`/topics/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`/topics/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`/topics/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`/topics/rendering`} component={Topic} />
    <Route path={`/topics/components`} component={Topic} />
    <Route path={`/topics/props-v-state`} component={Topic} />
  </div>
)
```

Now when the user navigates to /topics, they’ll see a nested navbar and the UI 
will be dynamically changing - just like before - based on the location. The only 
difference is now we’re rendering the navbar and the Routes inside of another 
component, which is also being rendered by React Router.

You may have noticed that we hard coded the URLs instead of dynamically creating 
them based on the current nested location we’re on. When React Router renders a 
component, it passes that component three things: match, location, and history. 
In this example, what we want is match.url which will give us the current matched 
portion of the URL (in our example, /topics). So anywhere where we’re hard coding
`/topic` we can replace with match.url.

```
const Topic = () => {
  <div>
    <h3>TOPIC</h3>
  </div>
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/rendering`} component={Topic} />
    <Route path={`${match.url}/components`} component={Topic} />
    <Route path={`${match.url}/props-v-state`} component={Topic} />
  </div>
)
```

Another thing you may have noticed is that we’re rendering three different 
Routes even though each are rendering the same component and the only 
difference is the nested URL. This is the perfect use case for using URL 
parameters.

```
const Topics = ({ match }) => (
  <div>
    ...

    <Route path={`${match.url}/:topicId`} component={Topic} />
  </div>
)
```

Now when React Router renders the Topic component, because we’re 
passed that match prop we talked about earlier, we’re also passed the 
topicId under match.params

```
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
```

Now lastly, when we’re at the /topics route, if a topic hasn’t already been 
selected, we want to render some text that says “Please select a topic”. 
We can make a component that renders that text or we can just use Routes 
render prop like so

```
<Route exact path={match.url} render={() => (
  <h3>Please select a topic.</h3>
)}/>
```

That’s it! Our final code now looks like this,

```
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    )
  }
}

export default App
```

By utilizing a component based API, React Router v4 truly is a React router. 
I believe React will make you a better JavaScript developer and React Router 
v4 will make you a better React developer.

## URL Parameters with React Router

URL parameters are parameters whose values are set dynamically in a page’s 
URL. This allows a route to render the same component while passing that 
component the dynamic portion of the URL so it can change based off of it.

A practical example of this would be Twitter’s profile pages. If rendered by 
React Router, that route may look like this

```
<Route path='/:handle' component={Profile} />
```

Then the Profile component would be able to access the dynamic handle 
from `props.match.params.handle`.

```
class Profile extends React.Component {
  state = {
    user: null
  }
  componentDidMount () {
    const { handle } = this.props.match.params

    fetch(`https://api.twitter.com/user/${handle}`)
      .then((user) => {
        this.setState(() => ({ user }))
      })
  }
  render() {
    ...
  }
}
```

Let’s look at the example from the React Router docs now. First, we’ll need to 
import the components we’ll need and build a navbar. We’ll be navigating 
between the /netflix, /zillow-group, /yahoo, and /module-create paths.

```
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <h2>Accounts</h2>
        <ul>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/zillow-group">Zillow Group</Link></li>
          <li><Link to="/yahoo">Yahoo</Link></li>
          <li><Link to="/modus-create">Modus Create</Link></li>
        </ul>
      </Router>
    )
  }
}

export default App
```

Each of those paths are going to render the same Child component which will just
show the URL parameter’s value (which we’ll call id).

```
const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)
```

Now we have our navbar and the component to render, the only thing 
left to do is to render a Route with a URL paramter.

```
render() {
  return (
    <Router>
      <h2>Accounts</h2>
      <ul>
        <li><Link to="/netflix">Netflix</Link></li>
        <li><Link to="/zillow-group">Zillow Group</Link></li>
        <li><Link to="/yahoo">Yahoo</Link></li>
        <li><Link to="/modus-create">Modus Create</Link></li>
      </ul>

      <Route path="/:id" component={Child}/>
    </Router>
  )
}
```

And that’s it. Because we’re using URL parameters, we can have four different 
paths render the exact same component and that component will be passed the 
URL parameter (in this case id) as a prop.


