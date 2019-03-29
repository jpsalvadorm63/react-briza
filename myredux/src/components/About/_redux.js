import API_ABOUT from "./_api"

// Actions
export const TEST_COMPONENT_SIGNAL = "TEST_COMPONENT_SIGNAL";

// Action creators
const testComponentSignal = (componentSignal) => {
  return {
    type: TEST_COMPONENT_SIGNAL,
    componentSignal
  }
};

// Reducer
export const reducer = (state = {}, action) => {
  switch(action.type) {
    case TEST_COMPONENT_SIGNAL :
      return {...state, componentSignal: action.componentSignal};
    default :
      return state;
  }
};

// Middleware
export const logger = (store) => (next) => (action) => {
  const result = next(action);
  if(action.type === TEST_COMPONENT_SIGNAL) {
    console.log("ABOUT........... 00000 - ", action.componentSignal);
  }
  return result
};

// Thunks
export const handleTestComponentSignal = () => {
  return (dispatch) => {
    return Promise.all([
      API_ABOUT.fetchComponentSignal(),
    ]).then(([componentSignal]) => {
      dispatch(testComponentSignal(componentSignal));
    })
  }
};
