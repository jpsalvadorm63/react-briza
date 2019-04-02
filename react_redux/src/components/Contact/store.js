import API from "./api"

// Initial state
const componentName = "Contact"
const version = 0.1
const state0 = {
  selectedOffice: "",

  //////////////////////////////////////////////////////////////
  componentInfo: {
    componentName,
    version,
    msg: "*",
  },
  counter: 0,
}

// Actions
export const TEST_CONTACT_SIGNAL = "TEST_CONTACT_SIGNAL"
export const INCREMENT_CONTACT_COUNTER = "INCREMENT_CONTACT_COUNTER"
export const SELECTED_OFFICE = "SELECTED_OFFICE"

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case SELECTED_OFFICE :
      return {
        ...state,
        selectedOffice: action.selectedOffice
      }
    case TEST_CONTACT_SIGNAL :
      const componentInfo = {...state.componentInfo,msg: action.componentSignal}
      const counter = state.counter + 1
      return { ...state, componentInfo, counter }
    case INCREMENT_CONTACT_COUNTER :
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
    case TEST_CONTACT_SIGNAL:
      console.log(store.getState().stateContact.componentInfo)
      break
    default:
      return result
  }
}

// Action creators
const selectedOffice = (selectedOffice) =>  {
  return {
    type: SELECTED_OFFICE,
    selectedOffice: selectedOffice
  }
}

const testSignal = (signal) => {
  return {
    type: TEST_CONTACT_SIGNAL,
    componentSignal:signal
  }
};

const incrementCounter = () => {
  return {
    type: INCREMENT_CONTACT_COUNTER
  }
};

// Thunks
export const handleSelectedOffice = (office) => {
  return (dispatch) => {
    dispatch(selectedOffice(office))
  }
}

export const handleTestContactSignal = () => {
  return (dispatch) => {
    return Promise.all([
      API.fetchContactSignal(componentName, version, "000001"),
    ]).then(([signal]) => {
      dispatch(testSignal(signal))
    })
  }
}

export const handleIncrementContactCounter = () => {
  return (dispatch) => {
    dispatch(incrementCounter())
  }
}
