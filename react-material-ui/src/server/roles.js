import {API as menusAPI} from './menus'

export const API = {} //; const _this = API

const roleTable = [
  {
    id: '501',
    pcode: 'PSEUDOCODE-ADMIN',
    roleName: 'Admin',
  },
  {
    id: '502',
    pcode: 'PSEUDOCODE-VIEWER',
    roleName: 'Viewer',
  },
  {
    id: '503',
    pcode: 'PSEUDOCODE-MANAGER',
    roleName: 'Manager',
  },
]

API.getRoleById = (id) => {
  const roles = roleTable.filter(item => {
    return item.id.toString() === id.toString()
  })
  return roles.length === 1 ?
    {
      pcode: roles[0].roleName,
      roleName: roles[0].roleName,
      ...menusAPI.getMenuByRoleId(roles[0].id),
    } : {
      pcode: null,
      roleName: null,
      roleMenu: null
    }
}
