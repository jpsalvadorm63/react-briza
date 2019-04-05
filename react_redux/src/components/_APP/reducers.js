import {combineReducers} from "redux"

import {reducer as stateApp} from "./store"
import {reducer as stateHome} from "../Home/store"
import {reducer as stateAbout} from "../About/store"
import {reducer as stateContact} from "../Contact/store"
import {reducer as stateLoginForm} from "../LoginForm/store"

export const reducers = combineReducers({
  stateApp,
  stateHome,
  stateAbout,
  stateContact,
  stateLoginForm
})
