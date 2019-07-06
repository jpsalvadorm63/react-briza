import {
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import {reducer as storeGVars} from 'src/common/gvars/store'
import {reducer as storeRoutes} from 'src/common/routes/store'
import {reducer as storeLogin} from 'src/ducks/Login/store'
// import {reducer as storeDrawer} from 'src/ducks/MainDrawer/store'

export const reducers = combineReducers(
  {
    storeGVars,
    storeRoutes,
    // storeDrawer,
    storeLogin,
  }
)

export const middlewares = applyMiddleware(
  thunk,
)
