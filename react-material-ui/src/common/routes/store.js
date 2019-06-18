// import React from 'react';
import API from './api'

// Initial state - basic Menu
const componentName = 'routes'
const version = 0.1
const state0 = {
  basicRoutes: [],
  roleRoutes:[],
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
const TEST_ROUTES_SIGNAL = 'TEST_ROUTES_SIGNAL'
const INCREMENT_ROUTES_COUNTER = 'INCREMENT_ROUTES_COUNTER'
const SET_BASICROUTES = 'SET_BASICROUTES'
const SET_ROLEROUTES = 'SET_ROLECROUTES'

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case TEST_ROUTES_SIGNAL:
      return {
        ...state,
        componentInfo: {...state.componentInfo,msg: action.componentSignal},
        counter: state.counter + 1,
      }
    case INCREMENT_ROUTES_COUNTER:
      return {
        ...state,
        counter: state.counter++,
      }
    case SET_BASICROUTES:
      return {
        ...state,
        basicRoutes: action.basicRoutes,
      }
    case SET_ROLEROUTES:
      return {
        ...state,
        roleRoutes: action.roleRoutes,
      }
    default:
      return state
  }
}

// Middleware
export const logger = (store) => (next) => (action) => {
  const result = next(action);
  switch(action.type) {
    case TEST_ROUTES_SIGNAL:
      break
    case INCREMENT_ROUTES_COUNTER:
      break
    default:
      return result
  }
}

// Action creators
const testComponentSignal = (signal) => {
  return {
    type: TEST_ROUTES_SIGNAL,
    componentSignal:signal,
  }
}

const incrementCounter = () => {
  return {
    type: INCREMENT_ROUTES_COUNTER
  }
}

const setBasicRoutes = (routes) => {
  return {
    type: SET_BASICROUTES,
    basicRoutes:routes,
  }
}

const setRoleRoutes = (routes) => {
  return {
    type: SET_ROLEROUTES,
    basicRoutes:routes,
  }
}

// Thunks
export const handleTestComponentSignal = () => {
  return (dispatch) => {
    return Promise.all([
      API.fetchComponentSignal(componentName, version, "000001"),
    ]).then(([signal]) => {
      dispatch(testComponentSignal(signal))
    })
  }
}

export const handleIncrementCounter = () => {
  return (dispatch) => {
    dispatch(incrementCounter())
  }
}

export const handleSetBasicRoutes = () => {
  return (dispatch) => {
    return Promise.all([
      API.fetchBasicRoutes()
    ]).then(([routes]) => {
      dispatch(setBasicRoutes(routes))
    })
  }
}

// export const handleSetRoleRoutes = (drawContent, id, parentId) => {
//   return (dispatch) => {
//     return Promise.all([
//       API.fetchSelectDrawerOption(drawContent, id, parentId)
//     ]).then(([drawerContent]) => {
//       dispatch(setDrawerContent(drawerContent))
//     })
//   }
// }
