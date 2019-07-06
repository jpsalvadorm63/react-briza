import {isValidElement} from "react";

export const index = {
  isUndefined: 'isUndefined',
  isNull:      'isNull',
  isEmpty:     'isEmpty',
  isFunction:  'isFunction',
  isJson:      'isJson',
  isArray:     'isArray',
  isReactObj:  'isReactObj',
  isMail:      'isMail',
  gOrEq8:      'gOrEq8',
  lOrEq20:     'lOrEq20',
  atLeast1cap: 'atLeast1cap',
  passwdChars: 'passwdChars',
  spaces:      'spaces'
}

const emailRE = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

// const passwordRE = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^%+=])(.{8,20})$/

export const validator = {
  isUndefined: (value) => typeof value === 'undefined',
  isNull:      (value) => typeof value !== 'undefined' && value === null,
  isEmpty:     (value) => typeof value !== 'undefined' && value !== null && !value,
  noSpace:     (value) => value.split(" ").length === 1,
  isFunction:  (node)  => node && typeof node === 'function',
  isJson:      (node)  => node && typeof node === 'object' && !Array.isArray(node) && !isValidElement(node),
  isArray:     (node)  => node && Array.isArray(node) && !isValidElement(node),
  isReactObj:  (node)  => node && isValidElement(node),
  isMail:      (value) => emailRE.test(value),
  spaces:      (value) => value.split(' ').length > 1,
  gOrEq8:      (value) => value.length >= 8,
  lOrEq20:     (value) => value.length <= 20,
  atLeast1cap: (value) => /(?=.*[A-Z])/.test(value),
  passwdChars: (value) => /(?!.*[^a-zA-Z0-9@#$^%+=])(.{1,})/.test(value),
}

export const validatorMessage = (fieldName) => ({
  isUndefined: (ok) => ok ? '' : `${fieldName} cannot be undefined`,
  isNull:      (ok) => ok ? '' : `${fieldName} cannot be null`,
  isEmpty:     (ok) => ok ? '' : `${fieldName} cannot be empty`,
  isFunction:  (ok) => ok ? '' : `${fieldName} cannot be a function`,
  isJson:      (ok) => ok ? '' : `${fieldName} cannot be is JSON`,
  isArray:     (ok) => ok ? '' : `${fieldName} cannot be an array`,
  spaces:      (ok) => ok ? '' : `${fieldName} cannot contain spaces`,
  isReactObj:  (ok) => ok ? '' : `${fieldName} cannot be a React object`,
  isMail:      (ok) => ok ? '' : `${fieldName} cannot be an email`,
  gOrEq8:      (ok) => ok ? '' : `${fieldName} must be 8 chars or more`,
  lOrEq20:     (ok) => ok ? '' : `${fieldName} must be less than 20 chars`,
  atLeast1cap: (ok) => ok ? '' : '...at least 1 Capital char required',
  passwdChars: (ok) => ok ? '' : 'special chars allowed: @#$^%+=',
})

export const validate = (
  fieldName,
  value,
  validators,
  msgOk,
  msgNotOk,
  validator0 = validator,
) => {
  const res = validators.map(({fn, expected, ...rest}) => {
    const result = validator0[fn](value)
    const ok = result === expected
    const _msgOk = rest.msgOk ? rest.msgOk : validatorMessage(fieldName)[fn](true)
    const _msgNotOk = rest.msgNotOk ? rest.msgNotOk : validatorMessage(fieldName)[fn](false)
    return {
      fn,
      expected,
      result,
      ok,
      msg: ok ? _msgOk : _msgNotOk,
    }
  }).filter(({ok}) => ok === false)

  return res.length === 0 ?
    {format:{ok: true, msg:msgOk, res}}:
    {format:{ok: false, msg:msgNotOk, res}}
}
