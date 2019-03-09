import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import {topics} from "./topics"

function Home () {
  return (<h1> HOME </h1> )
}

const Resource = ({match}) => {
  const topic = topics.find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId)

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  )
}

const Topic = ({ match }) => {
  const topic = topics.find(({id}) => id === match.params.topicId)
  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <ul>
        {
          topic.resources.map((sub) => (
            <li key={sub.id}>
              <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
            </li>
          ))
        }
      </ul>

      <hr />

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  )
}

const Topics = ({ match }) => (
    console.log(`${match.url} - ${match.path}`)
  ) || (
    <div>
      <h1>TOPICS</h1>
      <ul>
        {
          topics.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))
        }
      </ul>

      <hr/>

      <Route path={`${match.path}/:topicId`} component={Topic}/>
    </div>
)

const App021 = () => (
  <Router>
    <div style={{width: 1000, margin: '0 auto'}}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>
      <hr/>
      <Route exact path='/' component={Home} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>
)

export default App021
