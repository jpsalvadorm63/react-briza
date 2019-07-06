import {API as rolesAPI} from './roles'
import {shortName} from 'src/common/api'

export const API = {} //; const _this = API

const userTable = [
  {
    id: '001',
    pcode: 'PSEUDOCODE001',
    email: 'jl@qwerty.au',
    password: '123456Z%',
    userName: 'Johanna',
    completeName: 'Johanna Livingstone',
    phone: '0498765432',
    country: 'AU',
    role: 501,
    photo: 'peliroja',
  },
  {
    id: '002',
    pcode: 'PSEUDOCODE002',
    email: 'mi@qwerty.co',
    password: '123456Z%',
    user: 'Mire',
    completeName: 'Mireya Ivanova',
    phone: '0398765432',
    country: 'CO',
    role: 502,
    photo: 'negrita',
  },
  {
    id: '003',
    pcode: 'PSEUDOCODE003',
    email: 'cr@qwerty.ec',
    password: '123456Z%',
    user: 'Caty',
    completeName: 'Catalina del Rocío',
    phone: '0298765432',
    country: 'EC',
    role: 503,
    photo: 'otway',
  },
]

API.validateUserPassword = (loginInfo) => {
  const res = userTable.filter(item => {
    return item.email === loginInfo.email &&
      item.password === loginInfo.password
  })

  if(res.length === 1) {
    // delete res[0]['id']
    const role = {...rolesAPI.getRoleById(res[0]['role'])}
    if(role.roleMenu) {
      role.roleMenu.header.userInfo.name = shortName(res[0]['completeName'])
      role.roleMenu.header.userInfo.role = role.roleName
      role.roleMenu.header.userInfo.photo = res[0]['photo']
    }
    const user = {found:true , ...res[0], password: 'xxxxxxZ%', topMsg: '', ...role}
    delete user['role']
    delete user['pcode']
    return user
  } else
    return {found:false, ...loginInfo, topMsg: 'Invalid Mail or password'}
}

API.logoutUser = (loginInfo) => ({...loginInfo, email:'', password:'', found: false})
