import {usersAPI} from 'src/server'
import {selectDrawerOption} from "src/common/api";

const delayMS = 4

const API = {}//;const _this = API

API.fetchUserInfo = (loginInfo) => (
  new Promise((res, rej) => {
    setTimeout(() => {
      const result = usersAPI.validateUserPassword(loginInfo)
      res(result)
    }, delayMS)
  })
)

API.fetchLogoutUser = (loginInfo) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = usersAPI.logoutUser({...loginInfo})
      res(result)
    }, delayMS)
  })
}

API.fetchSelectRoleMenuOption = (roleMenu, id, parentId) => {
  return selectDrawerOption(roleMenu, id, parentId)
}

export default API
