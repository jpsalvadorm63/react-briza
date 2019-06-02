// Initial state

const counter0 = 0;
const calcPadLen = n => n ? ('' + n).length : 1
const state0 = {
    padLen: calcPadLen(counter0),
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

// Reducer
export const reducer = ( state = state0, action ) => {
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
    default:
      return state
  }
}

// Action creators
const incGCounter = () => ({
  type: INCREMENT_GLOBAL_COUNTER
})

const resetGCounter = () => ({
  type: RESET_GLOBAL_COUNTER
})

const setGCounter = (value) => ({
  type: SET_GLOBAL_COUNTER, value
})


export const hdlIncGCounter = dispatch => (
  dispatch(incGCounter())
)

export const hdlResetGCounter = () => dispatch => (
  dispatch(resetGCounter())
)

export const hdlSetGCounter = (value=counter0) => dispatch => (
  dispatch(setGCounter(value))
)
