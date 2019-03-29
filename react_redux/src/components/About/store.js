import API from "./api"

// Initial state
const componentName = "About"
const version = 0.1
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
export const TEST_ABOUT_SIGNAL = "TEST_ABOUT_SIGNAL"
export const INCREMENT_ABOUT_COUNTER = "INCREMENT_ABOUT_COUNTER"

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case TEST_ABOUT_SIGNAL :
      const componentInfo = {...state.componentInfo,msg: action.componentSignal}
      const counter = state.counter + 1
      return { ...state, componentInfo, counter }
    case INCREMENT_ABOUT_COUNTER :
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
    case TEST_ABOUT_SIGNAL:
      console.log(store.getState().stateAbout.componentInfo)
      break
    default:
      return result
  }
}

// Action creators
const testAboutSignal = (signal) => {
  return {
    type: TEST_ABOUT_SIGNAL,
    componentSignal:signal
  }
};

const incrementAboutCounter = () => {
  return {
    type: INCREMENT_ABOUT_COUNTER
  }
};

// Thunks
export const handleTestAboutSignal = () => {
  return (dispatch) => {
    return Promise.all([
      API.fetchComponentSignal(componentName, version, "000001"),
    ]).then(([signal]) => {
      dispatch(testAboutSignal(signal))
    })
  }
}

export const handleIncrementAboutCounter = () => {
  return (dispatch) => {
    dispatch(incrementAboutCounter())
  }
}
