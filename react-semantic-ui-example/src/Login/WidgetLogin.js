import React, {useState} from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Label
} from 'semantic-ui-react'
import API from "./api"

const initState = {
  email:"",
  password:""
}

const _validate = ({id, value, placeholder}, state) => {
  state.values[id] = value
  state.touched[id] = true

  if(id === "email") {
    const cond1 = !value
    const cond2 = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i.test(state.values["email"])
    state.errors[id] = cond1 ? "Required" : cond2 ? "is not an valid email address" : ""
  }
  
  return {...state}
}

const Error = ({name, state}) => {
  if(state.errors[name])
    return (
      <Label basic color='red' size={"tiny"} ribbon={"right"}>
        {state.errors[name]}
      </Label>
    )
  else return null
}

export default () => {
  let [state, validate] = useState(API.state0(initState))

  const onChange = (e) => {
    validate(_validate(e.target, state))
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">Login</Header>
        <Segment>
          <Form>
            <Form.Field>
              <Error name={"email"} state={state} />
              <label size="tiny">Email address</label>
              <Form.Input
                fluid
                icon="user"
                // iconPosition="left"
                id="email"
                value={state.values.email}
                onChange={onChange}
                error={state.errors.email}
              />
            </Form.Field>
            <Form.Input
              name="password"
              fluid
              icon="lock"
              // iconPosition="left"
              placeholder="Password"
              type="password"
              value={state.values.password}
              onChange={onChange}
            />
            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Form>
        </Segment>
        <Message>
          Not registered yet? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
