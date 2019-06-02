import {isValidElement} from "react"
import moment from "moment"

const delayms = 4
const simbol = 'X'
const IDfieldName = '_ID'
const SELECTfieldName = '_SELECTED'
const SELECTlevelName = '_LEVEL'

export const pad = (num, places, simbol = '0') => {
  return (simbol.repeat(places) + num).slice(-places)
}

export const isJson = (node) => node &&
  typeof node === 'object' && !Array.isArray(node) &&
  !isValidElement(node)

export const isArray = (node) => node && Array.isArray(node) &&
  !isValidElement(node)

export const isReactObj = (node) => node && isValidElement(node)

export const isFunction = (node) => node && typeof node === "function"

export const componentSignal = (componentName, version, number) => {
  const msg = `${moment(new Date()).format('YYYY-MM-DD hh:mm')}: ${componentName}, v${version} - ${number}`
  const length = (msg.length < 44) ? 44 : (msg.length+8)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(msg + ' ' + '.'.repeat(length - msg.length))
    }, delayms)
  })
}

export const sendStaticJson = (json) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(json)
    }, delayms)
  })
}

const scanArray = (data0, setFields, level) => {
  const data = [...data0]
  return data.map((item, idx) => {
    return scanJson(item,setFields, level)
  })
}

const setAndScanJson = (json, setFields, level) => {
  if(setFields) setFields(json, level)
  for(const k in json)
    json[k] = scanJson(json[k], setFields, level + 1)
  return json
}

export const scanJson = (tree, setFields, level) => {
  if(isArray(tree))
    return scanArray(tree,setFields, level)
  else if(isJson(tree))
    return setAndScanJson(tree, setFields, level)
  return tree
}

export const normalizeDrawerContent = (drawerContent) => {
  const dc = {...drawerContent}
  const options = dc.options
  const level0 = 0

  let id0=0; const incrementId = () => id0++

  const setFields = (tree, level) => {
    if(isJson(tree)) {
      if(!tree[IDfieldName])
        tree[IDfieldName] = `ID${pad(incrementId(),4, simbol)}`
      if(!tree[SELECTfieldName])
        tree[SELECTfieldName] = false
      if(!tree[SELECTlevelName])
        tree[SELECTlevelName] = level
    }
  }

  return {...dc, options:scanJson(options, setFields, level0)}
}

export const selectDrawerOption = (drawerContent, id, parentId) => {
  const dc = {...drawerContent}
  const options = dc.options
  const level0 = 0

  const setFields = (tree) => {
    if(isJson(tree)) {
      if(!parentId) {
        const condition1 = tree[IDfieldName] === id
        const condition2 = tree[IDfieldName] !== id
        if(condition1) tree[SELECTfieldName] = !tree[SELECTfieldName]
        if(condition2) tree[SELECTfieldName] = false
      } else {
        const condition1 = tree[IDfieldName] === id || tree[IDfieldName] === parentId
        const condition2 = tree[IDfieldName] !== id && tree[IDfieldName] !== parentId
        if(condition1) tree[SELECTfieldName] = tree[IDfieldName] === id ?
          !tree[SELECTfieldName] : tree[SELECTfieldName]
        if(condition2) tree[SELECTfieldName] = false
      }
    }
  }

  return {...dc, options:scanJson(options, setFields, level0)}
}

export const bgStyle = () => {
  const linear = "linear-gradient(to right, #4c4c4c 0%,#595959 12%,#666666 25%,#474747 39%,#2c2c2c 50%,#111111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%)"
  const webKit = "-webkit-linear-gradient(left, #4c4c4c 0%,#595959 12%,#666666 25%,#474747 39%,#2c2c2c 50%,#111111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%)"
  const old = "#4c4c4c"
  return {
    minHeight:"410px",
    background:`${linear}, ${webKit}, ${old}`,
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=1 )"
  }
}
