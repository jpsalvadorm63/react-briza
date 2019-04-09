const gen = (state, value) => {
  const myJson = {}
  for(var key in state) myJson[key] = value
  return myJson
}

const API = {}

API.state0 = (state0) => {
  return {
    values: state0,
    errors: gen(state0, ""),
    touched: gen(state0, false),
  }
}

export default API
