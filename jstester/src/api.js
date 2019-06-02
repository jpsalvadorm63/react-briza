// eslint-disable-next-line no-unused-vars
import React from "react"

export const pad = (num, places=2, simbol = '0') => {
  return (simbol.repeat(places) + num).slice(-places)
}

const isJson = (data0) => data0 && typeof data0 === 'object' && !Array.isArray(data0)

const isArray = (data0) => data0 && Array.isArray(data0)

const dataTest = {
  heather: {},
  footer: {},
  options : [
    {
      label: 'System2',
      items : [
        {label: 'CPU2' },
        {label: 'Memory2'},
        {label: 'Storage2'},
        {label: 'Network2'},
      ]
    },
    {
      label: 'System3',
      items : [
        {label: 'CPU3', id:"*****"},
        {label: 'Memory3'},
        {label: 'Storage3'},
        {label: 'Network3'},
      ]
    },
    {
      label: 'System4',
      items : [
        {label: 'CPU4' },
        {label: 'Memory4'},
        {label: 'Storage4'},
        {label: 'Network4'},
      ]
    },
  ]
}

const setIdInArrayItems = (data0, mid, increment, condition = (item)=> true) => {
  const data = [...data0]
  return data.map((item, idx) => {
    return setId(item,mid,increment,condition)
  })
}

const setIdInJsonItems = (data0, mid, increment, condition = (item)=> true) => {
  const data = {...data0}
  if(!data.id)
    data.id = `${mid}${pad(increment(),3)}`
  for(const k in data)
    data[k] = setId(data[k], mid, increment, condition)
  return data
}

export const setId = (data0, mid, increment, condition = (item)=> true) => {
  if(isArray(data0))
    return setIdInArrayItems(data0,mid,increment,condition)
  else if(isJson(data0))
    return setIdInJsonItems(data0, mid,increment, condition)
  return data0
}

export const json1 = (data=dataTest) => {
  //TODO not for export
  return JSON.stringify(data)
}
