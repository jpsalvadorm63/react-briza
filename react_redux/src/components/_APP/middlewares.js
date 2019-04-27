import {applyMiddleware} from "redux"

// Middleware
import thunk from "redux-thunk"

export const middlewares = applyMiddleware(
  thunk,
  loggerApp,
  loggerHome,
  loggerAbout,
  loggerContact,
  loggerMyForm
)
