import {applyMiddleware} from "redux"
import {combineReducers} from "redux"
import thunk from "redux-thunk"

import {reducer as reducerDrawer} from "src/ducks/MainDrawer/store"
import {logger as loggerDrawer} from "src/ducks/MainDrawer/store"
import {reducer as reducerGVars} from "src/common/gvars/store"

export const reducers = combineReducers(
  {
    reducerDrawer,
    reducerGVars,
  }
)

export const middlewares = applyMiddleware(
  thunk,
  loggerDrawer
)
