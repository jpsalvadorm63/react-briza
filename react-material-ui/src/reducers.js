import {applyMiddleware} from "redux"
import {combineReducers} from "redux"
import thunk from "redux-thunk"

import {reducer as storeDrawer} from "src/ducks/MainDrawer/store"
import {logger as loggerDrawer} from "src/ducks/MainDrawer/store"
import {reducer as storeGVars} from "src/common/gvars/store"
import {reducer as storeRoutes} from "src/common/routes/store"

export const reducers = combineReducers(
  {
    storeDrawer,
    storeGVars,
    storeRoutes,
  }
)

export const middlewares = applyMiddleware(
  thunk,
  loggerDrawer
)
