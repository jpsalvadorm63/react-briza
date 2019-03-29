import API from "./api"

// Initial state
const componentName = "_APP"
const version = 0.2
const state0 = {
  loggedIn: false,
  login: () => {this.loggedIn = true},
  logout: () => {this.loggedIn = false},

  //////////////////////////////////////////////////////////////
  componentInfo: {
    componentName,
    version,
    msg: "*",
  },
  counter: 0,
}

// Actions
const TEST_APP_SIGNAL = "TEST_APP_SIGNAL"
const INCREMENT_APP_COUNTER = "INCREMENT_APP_COUNTER"

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case TEST_APP_SIGNAL :
      const componentInfo = {...state.componentInfo,msg: action.componentSignal}
      const counter = state.counter + 1
      return { ...state, componentInfo, counter }
    case INCREMENT_APP_COUNTER :
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
    case TEST_APP_SIGNAL:
      console.log(store.getState().stateApp.componentInfo)
      break
    default:
      return result
  }
}

// Action creators
const testComponentSignal = (signal) => {
  return {
    type: TEST_APP_SIGNAL,
    componentSignal:signal,
  }
};

const incrementCounter = () => {
  return {
    type: INCREMENT_APP_COUNTER
  }
};

// Thunks

export const handleTestAppSignal = () => {
  return (dispatch) => {
    return Promise.all([
      API.fetchComponentSignal(componentName, version, "000001"),
    ]).then(([signal]) => {
      dispatch(testComponentSignal(signal))
    })
  }
}

export const handleIncrementAppCounter = () => {
  return (dispatch) => {
    dispatch(incrementCounter())
  }
}
