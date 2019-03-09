# React Router | 09

## Server Rendering with React and React Router

Server side rendering AKA Isomorphic JavaScript AKA Universal JavaScript
is the pipe dream idea of running your same JavaScript code on both the
server and the client. Why is that beneficial? Well, you'll typically
benefit from code reuse, improved performance, and SEO gains. The more
appropriate question is are the benefits you gain worth the complexity
you'll add? When building a server rendered app, there are more
circumstances you have to consider. Which code will be shared? Is there
initial state that needs to be shared? How do you handle routing on both
the server and client? Because all of these questions can be answered
linearly, we'll take the same approach with this post. We'll start off
with the bare basics, solve it, then add in more complexity. By the end,
you'll be able to decide if the complexity trade-off of server rendering
is worth it for your specific application.

If this is a new concept to you, it's important to grasp the big picture
of how all the pieces fit together before diving into the details.

Here's the (initial) process

1. A user types your URL into their web browser and hits enter.
2. Your server sees there is a GET request for the path “/”.
3. It renders your app's main component and wraps it inside of a standard 
HTML doc (DOCTYPE, html, head, body, etc) and sends the whole thing back as 
a response.

! [response](courseImages/response.png)

1. The browser sees it got an HTML document back from the server and its 
rendering engine goes to work. It soon finishes rendering the page.
2. At this point, the page is viewable and the browser starts downloading 
any scripts.

! [waterfall](courseImages/waterfall.png)

1. Once the scripts are downloaded, React takes over and the page is 
interactive.

Notice that with server rendering, the response the browser gets from 
the server is the HTML of your page that is ready to be rendered. 
This is vastly different from client side rendering which just spits 
back a blank HTML document with a huge JS bundle.

By sending back a finished HTML document, the browser is able to show 
the user some UI without having to wait for the JavaScript the finish 
downloading.

Now that we get the big picture, let's work on creating the foundation 
for what will become a server rendered React Router app.

Breaking down our list, we know there are three things we're going to 
need up front.

1. A React component - even just a basic one that renders “Hello World” 
for now.
2. A server which spits back our basic React component after it's wrapped 
it in some HTML structure.
3. A React app which is going to pick up from where the server rendered HTML 
left off and add in any event listeners to the existing markup where needed.

>    It's important to note here that, for React's sake, what you render on 
the server (#2 above) needs to be identical to what is rendered on the 
client (#3). If not, React will throw a warning.

As always when dealing with React, we're going to need to talk about webpack 
at some point. We're not going to use Create React App so we'll have to roll 
our own configuration. For the sake of keeping this tutorial as focused as 
possible, I'll paste the `webpack.config.js` file and the `package.json` below 
then highlight the important parts. 

```
// webpack.config.js

var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]
```

Notice we have two different configurations: one for the browser 
and one for the server.

The browser configuration is going to take the code that lives 
at `/src/browser/index.js`, run it through the babel-loader (which 
will run it through the env and react presets), then spit out the 
modified, bundled code at `/public/bundle.js`. The `__isBrowser__` line 
is going to add a property (`__isBrowser__`) to the global namespace 
so we know we're rendering on the browser.

The server configuration is similar. It's going to take the code 
that lives at `/src/server/index.js`, run it through the same `babel-loader`, 
then it's going to split it out at `./server.js`. The externals line 
makes it so the servers `node_modules` aren't bundled with it. target 
tells webpack to compile for usage in a “Node.js like environment” 
and also helps externals know what to ignore (built in node modules 
like path, fs, etc).

**tl;dr**. The final client code is going to be put at `public/bundle.js` 
and the final server code will be put at at the root `server.js`. 

```
// package.json

{
  "name": "rrssr",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "webpack -w & nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "description": "",
  "babel": {
    "presets": [
      "env",
      "react"
    ],
    "plugins": [
      "transform-object-rest-spread"
    ]
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "nodemon": "^1.12.5",
    "webpack": "^3.10.0",
    "webpack-node-externals": "^1.6.0"
  },
  "dependencies": {
    "cors": "^2.8.4",
    "express": "^4.16.2",
    "isomorphic-fetch": "^2.2.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-router-dom": "^4.2.2",
    "serialize-javascript": "^1.4.0"
  }
}
```

When we run `npm run start` in the command line, that will run 
`webpack -w` and `nodemon server.js`. `webpack -w` will watch 
our code and recompile when it when it changes and `nodemon server.js`
will re-start our server whenever our server code changes.

Now, let's get to work. According to our `webpack.config.js` file, 
inside of our `src` folder we're going to have a `server` and a `browser` 
folder. Let's also add a shared folder for all the functionality which 
is shared between the two. 

```
webpack.config.js
package.json
/src
  /browser
  /server
  /shared
```

Now if you'll remember, when we broke down the initial SSR process, there
were three items we were going to need first.

1. A React component - even just a basic one that renders “Hello World” 
for now.
2. A server which spits back our basic React component after it's wrapped 
it in some HTML structure.
3. A React app which is going to pick up from where the server rendered HTML 
left off and add in any event listeners to the existing markup where needed.

We can handle #1 pretty easily. Let's make an App.js component inside of the 
´shared´ folder and have it render “Hello World”. 

```
// src/shared/App.js

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default App
```

Done and done. Now, on to #2.

>   #2 - A server which spits back our basic React component after 
it's wrapped it in some HTML structure

First, let's create an `index.js` file inside of our `src/server` 
folder. We're going to use express so let's get the basics set up.

```
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
```

Now we want to make it so anytime our server receives a `GET` request, 
we send back the HTML skeleton  along with the markup from our `App` 
component inside of it. To do this, we'll use React's `renderToString` 
method. What this does is it takes in a React element and returns an 
HTML string.

```
import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import App from '../shared/App'
import React from 'react'

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  const markup = renderToString(
    <App />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})
app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
```

Lastly, we'll also want to include a `<script src='/bundle.js'></script>`
tag since, when the browser parses this HTML file, we want it to fetch 
our `bundle.js` file which contains all of our client code.

```
<head>
  <title>SSR with RR</title>
  <script src="/bundle.js" defer></script>
</head>
```

Now whenever a GET request is made to our server, we'll get some HTML 
back which includes our `<App />` component and a link to our 
`bundle.js` file. 

>   #3. A React app which is going to pick up from where the server 
rendered HTML left off and add in any event listeners to the existing 
markup where needed.

This one sounds more difficult than it is. Typically when you want to 
tell the browser about your React app, you call `ReactDOM.render` passing 
it the element and the DOM node you want to mount to. What we need to 
do with server rendering is similar, but instead of calling `ReactDOM.render`, 
we want to call `ReactDOM.hydrate`. What .hydrate is going to do is it tells 
React that you've already created the markup on the server and instead of 
recreating it on the client, it should preserve it and just attach any needed 
event handlers to the existing server rendered markup.

Let's make a new `index.js` file inside of `src/browser` and call `hydrate` there.

```
// src/browser/index.js
 
import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
 
hydrate(
  <App />,
  document.getElementById('app')
);

At this point, assuming you've already run npm run start in your terminal, when you visit localhost:3000 you should see “Hello World”. That “Hello World” was initially rendered on the server, then when it got to the client and the bundle.js file loaded, React took over.

Cool. Also, anticlimactic.

Let's mix things up a big so we can really see how this works. What if instead of rendering “Hello World”, we wanted App to render Hello {this.props.data}. That's a simple enough change inside of App.js

class App extends Component {
  render() {
    return (
      <div>
        Hello {this.props.data}
      </div>
    )
  }
}
```

Now whenever we create our App element, we need to pass it a data prop - React 101.

Where are we creating the App element? There are two places. The first place is inside of server/index.js for when we server render and the second is inside of browser/index.js for when the browser picks it up. Let's modify both of those and add a data prop of Tyler.

```
// browser/index.js
 
hydrate(
  <App data='Tyler' />,
  document.getElementById('app')
);
```

```
// server/index.js
 
const markup = renderToString(
  <App data='Tyler' />
)
```

Great. So now we see “Hello Tyler” in the UI. Remember earlier when 
I mentioned that what you render on the server needs to be identical 
to what is rendered on the client? We can see this in action if we 
change one of the data props.

```
hydrate(
  <App data='Mikenzi' />,
  document.getElementById('app')
);
```

Now when you refresh the app, you'll initially see “Hello Tyler” 
(which is what was rendered on the server), then when React takes 
over, you'll see “Hello Mikenzi”. In the console, you'll see a 
warning Text content did not match. Server: `"Tyler" Client: "Mikenzi"`.

Here's what the React docs have to say about this 

>   React expects that the rendered content is identical between the 
server and the client. It can patch up differences in text content, 
but you should treat mismatches as bugs and fix them. In development mode, 
React warns about mismatches during hydration. There are no guarantees 
that attribute differences will be patched up in case of mismatches. 
This is important for performance reasons because in most apps, 
mismatches are rare, and so validating all markup would be prohibitively 
expensive.

When you're just rendering a component with no data, it's not difficult 
to have the server rendered and client rendered content be identical - 
as we saw when we just rendered `<App />`. When you add in data, it gets a 
little more complex. You need to make sure that the component is rendered 
with the same `data` (or props) on both the client and server. Let's take a 
look at how we'd do that (without hard coding the data prop on the server 
and the client).

We know since the app is going to be server rendered first, any initial 
data our app needs is going to have to originate on the server. With that 
in mind, in order to make sure the server and the client are the same, 
we need to figure out how to get the same data that originated on the server, 
down to the client. Well, there's a pretty “old school” solution that works 
perfectly. Let's stick it on the global namespace so the client can reference 
it.

```
...
import serialize from "serialize-javascript"
 
app.get("*", (req, res, next) => {
  const name = 'Tyler'
  const markup = renderToString(
    <App data={name}/>
  )
 
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
      </head>
 
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})
```

Now, on the client, we can grab the name from `window.__INITIAL_DATA__`.

```
hydrate(
  <App data={window.__INITIAL_DATA__} />,
  document.getElementById('app')
);
```

We've solved sharing initial data from the server to the client by using the 
window object.

Now let's actually start building something of substance. Odds are you're 
never going to have static initial data. Your data will most likely be coming 
from an API somewhere. Let's modify our server so that it fetches some data 
before it returns the HTML. The end goal is to build something like this. We'll 
use the Github API to fetch popular repositories for specific language. We'll 
start off without any routing, then we'll see how we can add it in using React 
Router.

The first thing we'll want to do is make a function that takes in a language 
and, using the Github API, will fetch the most popular repos for that language. 
Because we'll be using this function on both the server and the client, let's 
make an api.js file inside of the shared folder and we'll call the function 
fetchPopularRepos.

```
// shared/api.js
import fetch from 'isomorphic-fetch'
 
export function fetchPopularRepos (language = 'all') {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
 
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    });
}
```

Now we need to figure out when to invoke this function. The idea is when a `GET`
request is made to our server, instead of calling renderToString immediately, 
we fetch the popular repositories first and then call it after giving our React 
app the data.

```
// server/index.js
 
...
 
import { fetchPopularRepos } from '../shared/api'
 
app.get("*", (req, res, next) => {
  fetchPopularRepos()
    .then((data) => {
      const markup = renderToString(
        <App data={data} />
      )
 
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>
          <body>
            <div id="app">${markup}</div>
          </body>
        </html>
      `)
    })
})
```

Now when a request is made we're getting the data we need, but we also want 
to modify the App component to be able to properly handle that new data. 
Instead of handling it in App, let's make a new component called Grid that 
deals with mapping over all the repos.

```
// shared/Grid.js
import React, { Component } from 'react'
 
class Grid extends Component {
  render() {
    const repos = this.props.data
 
    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}
export default Grid
```

```
// shared/App.js
import React, { Component } from 'react'
import Grid from './Grid'
 
class App extends Component {
  render() {
    return (
      <div>
        <Grid data={this.props.data} />
      </div>
    )
  }
}
```

Solid. Now when our app is requested, the server fetches the data the app 
needs and the HTML response we get has everything we need for the initial 
UI.

At this point, we've done a lot, but our app still has a long way to go, 
especially around routing.

React Router is a declarative, component based approach to routing. However, 
when we're dealing with server side rendering with React Router, we need to 
abandon that paradigm and move all of our routes to a central route 
configuration. The reason for this is because both the client and the server 
need to be aware of our routes. The client because it obviously needs to 
know which components to render as the user navigates around our app and the 
server because it needs to know which data to fetch when the user requests a 
specific path.

Let's create that central route config now. Make a new file inside of our 
shared folder called routes.js. We're going to represent our routes as an array 
of objects. Each object representing a new route. Eventually we'll map over 
our routes array and create a `<Route>` for each item. In the case of our app, 
we'll have two routes - / and /popular/:id. / will render the (soon to be 
created) Home component and /popular/:id will render our Grid component.

```
// shared/routes.js
import Home from './Home'
import Grid from './Grid'
 
const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
  }
]
 
export default routes
```

Before we continue, let's hurry and create the Home component.

```
// shared/Home.js
import React from 'react'
 
export default function Home () {
  return (
    <div>
      Select a Language
    </div>
  )
}
```

Now I mentioned earlier that the reason the server needs to have 
access to a central route config is because “it needs to know which 
data to fetch when the user requests a specific path”. What that 
means is that we're going to put any data requests that a specific 
route needs in the route object itself. What that will do is it will 
allow the server to say “It looks like the user is requesting the 
/popular/javascript route. Is there any data that needs to be fetched 
before we send back a response? There is? OK fetch it.”.

```
// shared/routes.js
import Home from './Home'
import Grid from './Grid'
import { fetchPopularRepos } from './api'
 
const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(
      path.split('/').pop()
    )
  }
]
 
export default routes
```

Again, by adding a fetchInitialData property to our /popular/:id route, 
when a user makes a GET request with that path from the server, we'll 
go ahead and invoke fetchInitialDatapassing it the path and what we'll 
get back is a promise that will eventually resolve with the data we need 
to render.

Let's head back over to our server and see what these changes will look like.

The first thing we need to do is figure out which route (if any) matches the 
current requested URL to the server. For example, if the the user requests the 
/ page, we need to find the route which matches /. Luckily for us, React Router 
exports a matchPath function that it uses internally to match locations to routes.

```
// server/index.js
 
...
 
import { matchPath } from "react-router-dom"
import routes from '../shared/routes'
 
app.get("*", (req, res, next) => {
  const activeRoute = routes.find(
    (route) => matchPath(req.url, route)
  ) || {}
})
 
...
````

Now, activeRoute will be the route of whatever page the user was requesting 
(`req.url`).

The next step is to see if that route requires any data. We'll check if the 
activeRoute has a fetchInitialData property. If it does, we'll invoke it 
passing it the current path, if it doesn't, we'll just continue on.

```
app.get("*", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
 
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()
 
  promise.then((data) => {
 
  }).catch(next)
})
```

Now we have a promise which is going to resolve with the data, or nothing. As we've done previously, we want to grab that and both pass it to our component as well as put it on the window object so the client can pick it up later.

```
app.get("*", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
 
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()
 
  promise.then((data) => {
    const markup = renderToString(
      <App data={data} />
    )
 
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
 
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  }).catch(next)
})
```

Getting closer. Now instead of always fetching the popular repos, we're only 
fetching them if the route that is being rendered has a fetchInitialData 
property. This means that only if the user requests a path that matches 
/popular/:id will we fetch data.

Try it out in your browser. Head to localhost:3000/popular/javascript. You'll 
notice that the most popular JavaScript repos are being requested. You can 
change the language to any langauge the github API support and you'll get back 
the most popular repos for that language. The reason this works is because we're 
passing req.path to fetchInitialData in our routes array. It's then parsing the 
language from the path then calling fetchPopularRepos with that language.

```
// shared/routes.js
 
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') =>
      fetchPopularRepos(path.split('/').pop())
  }
```

Now that we're fetching the correct data on our server based on the route the user requested, let's add in some client side routing as well.

As always, we need to wrap our main component (App) inside of React Router's BrowserRouter component on the client. We'll do that inside of browser/index.js since that's where we're rendering App.

```
import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'
 
hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL_DATA__} />
  </BrowserRouter>,
  document.getElementById('app')
);
```

Now, because we've given control of the client over to React Router, we
also need to do the same on the server so they match. Because we're on
the server, it doesn't make sense to render a component called BrowserRouter.
Instead, we'll use React Router's StaticRouter component. It's called
StaticRouter since the location never actually changes. It takes in two required props: location and context. location is the current location being requested by the user (req.url) and context needs to be an object that can contain any information about the render - we'll use a blank context object for now.

```
// server/index.js
...
import { StaticRouter, matchPath } from "react-router-dom"
...
 
const markup = renderToString(
  <StaticRouter location={req.url} context={{}}>
    <App data={data}/>
  </StaticRouter>
)
 
...
```

Now, let's render some client side routes. We already have our 
routes array, so we just need to map over that. One caveat is 
we also want to [pass the components rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
the  fetchInitialData property if it exists so the client can also invoke
it if it doesn't already have the data from the server. To do that, 
we'll use Routes render method so we can create the element ourself 
and pass it any props.

```
// shared/App.js
import React, { Component } from 'react'
import routes from './routes'
import { Route } from 'react-router-dom'
 
class App extends Component {
  render() {
    return (
      <div>
       {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => (
              <C {...props} {...rest} />
            )}
          />
        ))}
      </div>
    )
  }
}
```

Before we move on, let's add a `Navbar` and a
[catch all - 404](https://tylermcginnis.com/react-router-handling-404-pages/)
route to our App.

```
// shared/Navbar.js
import React from 'react'
import { NavLink } from 'react-router-dom'
 
export default function Navbar () {
  const languages = [{
    name: 'All',
    param: 'all'
  }, {
    name: 'JavaScript',
    param: 'javascript',
  }, {
    name: 'Ruby',
    param: 'ruby',
  }, {
    name: 'Python',
    param: 'python',
  }, {
    name: 'Java',
    param: 'java',
  }]
 
  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/popular/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
```

```
// shared/NoMatch.js
import React from 'react'
 
export default function NoMatch () {
  return (
    <div>
      Four Oh Four
    </div>
  )
}
```

```
import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import NoMatch from './NoMatch'
 
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
 
        <Switch>
         {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </div>
    )
  }
}
export default App
```

Looking good. If we go to the `/` route, we'll get the `Navbar` and
the Home components as expected, but, if we click on one of the `Link`s
we get an error - `Cannot read property 'map' of undefined`.

Essentially what's happening is before, we were passing `data` as a prop
to `App`, then, we passed it down to `Grid`. Because we aren't rendering
Grid inside of `App` anymore (since we're rendering our Routes) instead,
that data isn't making its way to `Grid` and therefor, `props.data`
inside of `Grid` is `undefined`. That was a mouthful. Basically `Grid`
is no longer receiving the data it needs.

There are a few different ways to fix this. We could pass the data to
the component when we render it inside of the `render` method.

```
<C {...props} {...rest} data={this.props.data} />
```

That works. But it's going to pass data to every component, even the
ones that don't need it. We could get fancy and only pass it if it's
the Grid component, but that seems overly complex. Instead, we're
going to use the context prop we talked about earlier. Anything that
we stick on the object that we pass to context, we'll be able to
access later on in any component as props.staticContext. So instead
of passing data to App, let's use context instead.

```
// server/index.js
...
 
promise.then((data) => {
  const context = { data }
 
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
 
...
```

Notice we're no longer passing anything as a prop to App. Now, in order to gain access to the popular repos, we'll get it off of props.staticContext.data. Let's head over to our Grid component where we need the data and make that change.

```
class Grid extends Component {
  render() {
    const repos = this.props.staticContext.data
 
    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}
```

Our app is at an interesting point right now. If you load
http://localhost:3000/popular/javascript
in your browser it works, but it also throws some errors. The reason
for this is because we're rendering on the server, that's working fine.
Then when React goes to "pick it up", it's throwing a **Cannot read
property 'data' of undefined** error. The reason for this is because,
just as we did before on the server, we we're passing a `data` prop to
our `App` component on the client.

```
// browser/index.js
 
hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL_DATA__} />
  </BrowserRouter>,
  document.getElementById('app')
);
```

That's not going to work for the same reasons it didn't work on the
server. `App` isn't passing down that data to the `Grid` component
anymore. Instead of passing data down, we can just grab it off the
`window` object inside of the `Grid` component itself.

```
// browser/index.js
 
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
```

```
class Grid extends Component {
  constructor(props) {
    super(props)
 
    let repos
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      repos = props.staticContext.data
    }
 
    this.state = {
      repos,
    }
  }
  render() {
    const { repos } = this.state
 
    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}
```

Looking good. Now if we're rendering on the browser, we'll grab the data
from `window.__INITIAL_DATA__` and if we're not, then we'll grab it off
of `staticContext`.

### I promise you we're so close.

At this point our server is all finished. It's properly getting the
requested path, fetching any data for that path, then sending back a
nice server rendered response. It's the client that's having some
issues. As an example, load up the home route `localhost:3000` then click
on the "JavaScript" link. You'll notice you get an error. Any idea why
that's happening? Remember we're dealing with both server side and
client side rendering. Server side rendering is only on the initial page
load, after that, React Router takes over. So what's happening is when
we first request the app, everything is fine. Then React Router takes
over and we try to go to `/popular/javascript` and the app breaks
because we don't have the correct data. The good news is to solve this
error, we can just do as we've always done - fetch the data in
`componentDidMount` if we didn't already get it from the server.

```
class Grid extends Component {
  constructor(props) {
    super(props)
 
    let repos
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      repos = this.props.staticContext.data
    }
 
    this.state = {
      repos,
      loading: repos ? false : true,
    }
 
    this.fetchRepos = this.fetchRepos.bind(this)
  }
  componentDidMount () {
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id)
    }
  }
  fetchRepos (lang) {
    this.setState(() => ({
      loading: true
    }))
 
    this.props.fetchInitialData(lang)
      .then((repos) => this.setState(() => ({
        repos,
        loading: false,
      })))
  }
  render() {
    const { repos, loading } = this.state
 
    if (loading === true) {
      return <p>LOADING</p>
    }
 
    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}
```

Now when the component mounts, if we don't already have the data (which
we won't if React Router took us to this page), we'll fetch it and then
call `setState`. We've also added in a `loadingproperty` to our state to
improve the UX just a little bit.

### One. More. Problem.

Now when we navigate from `/` to `/popular/javascript` everything works
fine. But what happens when we navigate from one language to another?
Say from `/popular/javascript` to `/popular/ruby`? You'll notice nothing
happens. Again, this is just a React thing. The props are changing but
the component never re-mounts, so `componentDidMount` isn't called
again. We can use React's `componentDidUpdate` lifecycle method to fix
this issue.

```
// shared/Grid.js
 
componentDidUpdate (prevProps, prevState) {
  if (prevProps.match.params.id !== this.props.match.params.id) {
    this.fetchRepos(this.props.match.params.id)
  }
}
```

Now, when the next language (`nextProps.match.params.id`) doesn't match
the previous language (`match.params.id`), then we'll go ahead and call
`fetchRepos` passing it the new language.

And with that, we're finished! The first request will be server rendered
and every subsequent path change after that React Router will own.

Now, you tell me, is this complexity worth the benefits to your app?

>   You can find the final code
[here](https://github.com/tylermcginnis/rrssr).
