import React from 'react'
import queryString from 'query-string'

const About = (props) => {
  const values = queryString.parse(props.location.search)
  return (
    <div>
      <h1>About Component ... {`${values.all}`} - {`${values.nothing}`}</h1>
    </div>
  )
}

export default About
