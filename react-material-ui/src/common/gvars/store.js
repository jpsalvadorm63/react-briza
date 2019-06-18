// Initial state

const counter0 = 0;
const calcPadLen = n => n ? ('' + n).length : 1
const state0 = {
  padLen: calcPadLen(counter0),
  loggedIn: false,
  ////////////////////////////////////////////////////
  componentInfo: {
    componentName: "gvars",
    version: 0.1,
    msg: "*",
  },
  counter: counter0,
}

export const getComponentInfo = () => state0.componentInfo

// Actions
const INCREMENT_GLOBAL_COUNTER = "INCREMENT_GLOBAL_COUNTER"
const RESET_GLOBAL_COUNTER = "RESET_GLOBAL_COUNTER"
const SET_GLOBAL_COUNTER = "SET_GLOBAL_COUNTER"
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

// Reducer
export const reducer = (state = state0, action) => {
  switch(action.type) {
    case INCREMENT_GLOBAL_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
        padLen: calcPadLen
      }
    case RESET_GLOBAL_COUNTER:
      return {...state, ...state0}
    case SET_GLOBAL_COUNTER:
      return {...state, ...state0}
    case LOGIN:
      return {...state, loggedIn:true}
    case LOGOUT:
      return {...state, loggedIn:false}
    default:
      return state
  }
}

// Action creators
const incrementCounter = () => ({type: INCREMENT_GLOBAL_COUNTER})
const resetCounter = () => ({type: RESET_GLOBAL_COUNTER})
const setCounter = (value) => ({type: SET_GLOBAL_COUNTER, value})
const login = () => ({type: LOGIN})
const logout = () => ({type: LOGOUT})

// handlers
export const handleIncrementCounter = dispatch => (dispatch(incrementCounter()))
export const handleResetCounter = () => dispatch => (dispatch(resetCounter()))
export const handleSetCounter = (value=counter0) => dispatch => (dispatch(setCounter(value)))
export const handleLogin = () => dispatch => (dispatch(login()))
export const handleLogout = () => dispatch => (dispatch(logout()))
