import React, {useState} from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react'
import API from "./api"
import {ErrorLabel} from "src/_COMMONS/components"

const initState = {
  email:"",
  password:""
}

const _validate = ({name, value, placeholder}, state) => {
  state.touched[name] = true
  state.values[name] = value

  if(name === "email") {
    const cond = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i.test(state.values[name])
    state.errors[name] = cond ? "is not a valid email address" : ""
  }

  if(name === "password") {
    const cond = !/^\S{6,32}$/i.test(state.values[name])
    state.errors[name] = cond ? "at least 6 chars, no white spaces or tabs" : ""
  }
  
  return {...state}
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
          <Form autoComplete={"off"}>
            <Form.Field>
              <Form.Input
                fluid
                name={"email"}
                label={"Email address"}
                icon={"user"}
                value={state.values.email}
                onChange={onChange}
                error={!!state.errors.email}
              />
              <ErrorLabel name={"email"} state={state} />
            </Form.Field>

            <Form.Field>
              <Form.Input
                fluid
                name={"password"}
                label={"Password"}
                icon={"lock"}
                type={"password"}
                value={state.values.password}
                onChange={onChange}
                error={!!state.errors.password}
              />
              <ErrorLabel name={"password"} state={state} />
            </Form.Field>
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
