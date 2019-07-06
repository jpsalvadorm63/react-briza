import API from './api';

// Initial state - Login
const componentName = 'login'
const version = 0.3
const state0 = {
  loginInfo: {
    found: false,
    email: 'jl@qwerty.au',
    password: '123456Z%',
    topMsg: 'Please Login',
    photo: null,
    userName: null,
    completeName: null,
    roleMenu: null,
    roleName: null,
    country: null,
    phone: null,
  },
  ////////////////////////////////////////////////////
  componentInfo: {
    componentName,
    version,
    msg: "*",
  },
  counter: 0,
}

// Actions
const TEST_LOGIN_SIGNAL = 'TEST_LOGIN_SIGNAL'
const INCREMENT_LOGIN_COUNTER = 'INCREMENT_LOGIN_COUNTER'
const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'
const SET_ROLE_MENU = 'SET_ROLE_MENU'

// Reducer
export const reducer = ( state = state0, action ) => {
  switch(action.type) {
    case TEST_LOGIN_SIGNAL:
      return {
        ...state,
        componentInfo: {...state.componentInfo,msg: action.componentSignal},
        counter: state.counter + 1,
      }
    case INCREMENT_LOGIN_COUNTER:
      return {
        ...state,
        counter: state.counter++,
      }
    case USER_LOGIN:
      return {
        ...state,
        loginInfo: action.loginInfo,
        counter: state.counter + 1,
      }
    case USER_LOGOUT:
      return {
        ...state0,
        counter: state.counter + 1,
      }
    case SET_ROLE_MENU:
      const newLoginInfo = {...state.loginInfo, roleMenu:action.roleMenu}
      return {
        ...state,
        loginInfo: newLoginInfo,
        counter: state.counter + 1,
      }
    default:
      return state
  }
}

// Middleware
export const logger = (store) => (next) => (action) => {
  const result = next(action);
  switch(action.type) {
    case TEST_LOGIN_SIGNAL:
      break
    case INCREMENT_LOGIN_COUNTER:
      break
    case USER_LOGIN:
      break
    case USER_LOGOUT:
      break
    default:
      return result
  }
}

// Action creators
const testComponentSignal = (signal) => {
  return {
    type: TEST_LOGIN_SIGNAL,
    componentSignal:signal,
  }
}

const incrementCounter = () => {
  return {
    type: INCREMENT_LOGIN_COUNTER
  }
}

const userLogin = (loginInfo) => ({
  type: USER_LOGIN,
  loginInfo: {
    ...loginInfo,
    topMsg: loginInfo.found ? 'Logged as' : 'error, Invalid email or password'
  }
})

const userLogout = () => ({type: USER_LOGOUT,})

const setRoleMenu = (roleMenu) => {
  return {
    type: SET_ROLE_MENU,
    roleMenu,
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

export const handleUserLogin = (loginInfo, loggedIn) => {
  return (dispatch) => {
    if(!loggedIn) {
      return Promise.all([
        API.fetchUserInfo(loginInfo, loggedIn),
      ]).then(values => {
        dispatch(userLogin(values[0]))
      })
    }
  }
}

export const handleUserLogout = (loginInfo) => {
  return (dispatch) => {
    return Promise.all([
      API.fetchLogoutUser(loginInfo),
    ]).then(values => {
      dispatch(userLogout())
    })
  }
}

export const handleSelectRoleMenuOption = (roleMenu, id, parentId) => {
  return (dispatch) => {
    return Promise.all([
      API.fetchSelectRoleMenuOption(roleMenu, id, parentId)
    ]).then(([roleMenu]) => {
      dispatch(setRoleMenu(roleMenu))
    })
  }
}
