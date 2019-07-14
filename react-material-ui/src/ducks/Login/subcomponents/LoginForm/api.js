import { validate, index} from 'src/common/validator'

export const API = {}

const _API = API

API.field = {
  emailAddress: {label:'Email Address'},
  password: {label:'Password'},
  completeName: {label:'User Name'},
}

API.updateEmail = (email, loginInfo) => (
  {
    ...loginInfo,
    email:email.trim().split(' ').join('')
  }
)

API.updatePassword = (password, loginInfo) => (
  {
    ...loginInfo,
    password:password.trim()
  }
)

API.validateEmailFormat = (email) =>{
  const fieldName = _API.field.emailAddress.caption
  const msgOk = ''
  const msgNotOk = 'please enter a valid email'
  return validate(
    fieldName,
    email,
    [
      {fn: index.isUndefined, expected: false, msgOk, /*msgNotOk: msgEmailNotOk*/},
      {fn: index.isNull,      expected: false, msgOk,},
      {fn: index.isEmpty,     expected: false, msgOk,},
      {fn: index.spaces,      expected: false, msgOk,},
      {fn: index.isMail,      expected: true,  msgOk,},
    ],
    msgOk,
    msgNotOk,
  )
}

API.validatePasswordFormat = (password) => {
  const fieldName = _API.field.password.caption
  const msgOk = ''
  const msgPasswordNotOk = 'please enter a valid password'
  return validate(
    fieldName,
    password,
    [
      {fn: index.isUndefined,  expected: false, msgOk,},
      {fn: index.isNull,       expected: false, msgOk,},
      {fn: index.isEmpty,      expected: false, msgOk,},
      {fn: index.spaces,       expected: false, msgOk,},
      {fn: index.passwdChars,  expected: true,  msgOk,},
      {fn: index.gOrEq8,       expected: true,  msgOk,},
      {fn: index.lOrEq20,      expected: true,  msgOk,},
      {fn: index.atLeast1cap,  expected: true,  msgOk,},
    ],
    msgOk,
    msgPasswordNotOk,
  )
}

API.validateFormats = (loginInfo) => ({
  ...loginInfo,
  email: _API.validateEmailFormat(loginInfo.email),
  password: _API.validatePasswordFormat(loginInfo.password),
})
