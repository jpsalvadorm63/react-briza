//TODO : Remove this file, functionality is going to Login Store
import API from "./api"
import {normalizeDrawerContent} from "src/common/api";
// import {roleMenu} from "./api"

// Initial state
const componentName = "Drawer"
const version = 0.1
const state0 = {
  roleMenu: API.fetchDrawerContent("mode1"),
  ////////////////////////////////////////////////////
  componentInfo: {
    componentName,
    version,
    msg: "*",
  },
  counter: 0,
}

export const getComponentInfo = () => state0.componentInfo

// Actions
const TEST_APP_SIGNAL = "TEST_APP_SIGNAL"
const INCREMENT_APP_COUNTER = "INCREMENT_APP_COUNTER"
const SET_DRAWER_CONTET = "SET_DRAWER_CONTET"

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
    case SET_DRAWER_CONTET:
      return {
        ...state,
        roleMenu: action.roleMenu
      }
    default :
      return state
  }
}

// Middleware
export const logger = (store) => (next) => (action) => {
  const result = next(action);
  switch(action.type) {
    case TEST_APP_SIGNAL:
      break
    case SET_DRAWER_CONTET:
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

// const setDrawerContent = (drawerContent) => {
//   return {
//     type: SET_DRAWER_CONTET,
//     roleMenu:drawerContent,
//   }
// }

// Thunks

// export const handleTestAppSignal = () => {
//   return (dispatch) => {
//     return Promise.all([
//       API.fetchComponentSignal(componentName, version, "000001"),
//     ]).then(([signal]) => {
//       dispatch(testComponentSignal(signal))
//     })
//   }
// }
//
// export const handleIncrementAppCounter = () => {
//   return (dispatch) => {
//     dispatch(incrementCounter())
//   }
// }

// export const handleSetDrawerContent = (mode) => {
//   return (dispatch) => {
//     return Promise.all([
//       API.fetchDrawerContent(mode)
//     ]).then(([roleMenu]) => {
//       dispatch(setDrawerContent(normalizeDrawerContent(roleMenu)))
//     })
//   }
// }

// export const handleSelectDrawerOption = (drawContent, id, parentId) => {
//   return (dispatch) => {
//     return Promise.all([
//       API.fetchSelectDrawerOption(drawContent, id, parentId)
//     ]).then(([drawerContent]) => {
//       dispatch(setDrawerContent(drawerContent))
//     })
//   }
// }
