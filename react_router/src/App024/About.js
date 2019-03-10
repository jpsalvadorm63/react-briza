import React from 'react'
import queryString from 'query-string'

const initialState = {
  loading: false,
  count: 0,
}

const About = (props) => {
  const values = queryString.parse(props.location.search)
  return (
    <div>
      <h1>About Component ... {`${values.all}`} - {`${values.nothing}`}</h1>
    </div>
  )
}

export default About
