import {applyMiddleware} from "redux"

// Middleware
import thunk from "redux-thunk"
import {logger as loggerApp} from "./store"
import {logger as loggerHome} from "../Home/store"
import {logger as loggerAbout} from "../About/store"
import {logger as loggerContact} from "../Contact/store"

export const middlewares = applyMiddleware(
  thunk,
  loggerApp,
  loggerHome,
  loggerAbout,
  loggerContact
)
