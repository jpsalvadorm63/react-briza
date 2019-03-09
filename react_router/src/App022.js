import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

const MainPage= () => (<div>Main Page</div>)

const EditPage= () => (<div>Edit Page</div>)

const NoMatch = () => (<p>No Match</p>)

const App022 = () => {
  return(
    <Router>
      <Switch>
        <Route path="/items/:id" component={EditPage} />
        <Route exact path="/items" component={MainPage} />
        <Route exact path="/" render={() => (<Redirect to="/items" />)} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  )
};

export default App022
