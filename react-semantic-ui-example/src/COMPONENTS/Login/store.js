import API from "./api"

// Initial state
const componentName = "LoginForm"
const version = 0.1
const state0 = {
  lgnInf:API.LoginForm.initialValues,

  ////////////////////////////////
  componentInfo: {
    componentName,
    version,
    msg: "*",
  },
  counter: 0,
}

// Actions
export const LOGIN_INFO = "LOGIN_INFO"

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case LOGIN_INFO :
      return {
        ...state,
        lgnInf: action.lgnInf
      }
    default :
      return state;
  }
}

// Middleware
export const logger = (store) => (next) => (action) => {
  const result = next(action);
  switch(action.type) {
    default:
      return result
  }
}

// Action creators
const loginInfo = (lgnInf) => {
  return {
    type: LOGIN_INFO,
    lgnInf
  }
}

// Thunks
export const handleLoginInfo = (lgnInf) => {
  return (dispatch) => {
    dispatch(loginInfo({...lgnInf, password:"****"}))
  }
}

export const handleLogout = () => {
  return (dispatch) => {
    dispatch(loginInfo({...API.LoginForm.initialValues}))
  }
}
