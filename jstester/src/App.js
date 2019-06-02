import React from 'react'
// import logo from './logo.svg'
import './App.css'
import ReactJson from 'react-json-view'
import {json1, setId} from './api'

export default () => {
  let id0 = 10
  const incrementId = () => ++id0

  const data = JSON.parse(json1())

  const dataViewerProps = {
    collapsed: false,
    src: {
      ...data,
      options:setId(data.options, "ZZ", incrementId)
    },
    theme: "paraiso",
    iconStyle: "circle",
    indentWidth: 4,
    displayDataType: true,
  }

  // more options in https://mac-s-g.github.io/react-json-view/demo/dist/
  return (
    <div>
      <ReactJson {...dataViewerProps} />
    </div>
  );
}
