import API from "./api"

// Initial state
const componentName = "Home"
const version = 0.2
const state0 = {

  //////////////////////////////////////////////////////////////
  componentInfo: {
    componentName,
    version,
    msg: "*",
  },
  counter: 0,
}

// Actions
export const TEST_HOME_SIGNAL = "TEST_HOME_SIGNAL"
export const INCREMENT_HOME_COUNTER = "INCREMENT_HOME_COUNTER"

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case TEST_HOME_SIGNAL :
      const componentInfo = {...state.componentInfo,msg: action.componentSignal}
      const counter = state.counter + 1
      return { ...state, componentInfo, counter }
    case INCREMENT_HOME_COUNTER :
      return {
        ...state,
        counter: state.counter ? state.counter++ : 0
      }
    default :
      return state;
  }
}

// Middleware
export const logger = (store) => (next) => (action) => {
  const result = next(action);
  switch(action.type) {
    case TEST_HOME_SIGNAL:
      console.log(store.getState().stateHome.componentInfo)
      break
    default:
      return result
  }
}

// Action creators
const testSignal = (signal) => {
  return {
    type: TEST_HOME_SIGNAL,
    componentSignal: signal
  }
}

const incrementCounter = () => {
  return {
    type: INCREMENT_HOME_COUNTER
  }
};

// Thunks

export const handleTestHomeSignal = () => {

  return (dispatch) => {
    return Promise.all([
      API.fetchComponentSignal(componentName, version, "000001"),
    ]).then(([signal]) => {
      dispatch(testSignal(signal))
    })
  }
}

export const handleIncrementHomeCounter = () => {
  return (dispatch) => {
    dispatch(incrementCounter())
  }
}
