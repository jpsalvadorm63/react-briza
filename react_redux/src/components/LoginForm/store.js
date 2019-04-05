import API from "./api"

// Initial state
const componentName = "LoginForm"
const version = 0.1
const state0 = {
  lgnInf:API.LoginForm.initialValues,
  //////////////////////////////////////////////////////////////
  componentInfo: {
    componentName,
    version,
    msg: "*",
  },
  counter: 0,
}

// Actions
export const TEST_LOGINFORM_SIGNAL = "TEST_LOGINFORM_SIGNAL"
export const INCREMENT_LOGINFORM_COUNTER = "INCREMENT_LOGINFORM_COUNTER"
export const LOGIN_INFO = "LOGIN_INFO"

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case TEST_LOGINFORM_SIGNAL :
      const componentInfo = {...state.componentInfo,msg: action.componentSignal}
      const counter = state.counter + 1
      return { ...state, componentInfo, counter }
    case INCREMENT_LOGINFORM_COUNTER :
      return {
        ...state,
        counter: state.counter ? state.counter++ : 0
      }
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
    case TEST_LOGINFORM_SIGNAL:
      console.log(store.getState().stateLoginForm.componentInfo)
      break
    default:
      return result
  }
}

// Action creators
const testMyFormSignal = (signal) => {
  return {
    type: TEST_LOGINFORM_SIGNAL,
    componentSignal:signal
  }
}

const incrementMyFormCounter = () => {
  return {
    type: INCREMENT_LOGINFORM_COUNTER
  }
}

const loginInfo = (lgnInf) => {
  return {
    type: LOGIN_INFO,
    lgnInf
  }
}

// Thunks
export const handleTestLoginFormSignal = () => {
  return (dispatch) => {
    return Promise.all([
      API.fetchComponentSignal(componentName, version, "000001"),
    ]).then(([signal]) => {
      dispatch(testMyFormSignal(signal))
    })
  }
}

export const handleIncrementLoginFormCounter = () => {
  return (dispatch) => {
    dispatch(incrementMyFormCounter())
  }
}

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
