import React from "react"
import ReactJson from 'react-json-view'

export default ({json}) => {

  const dataViewerProps = {
    collapsed: false,
    src: json,
    theme: "paraiso",
    iconStyle: "circle",
    indentWidth: 4,
    displayDataType: true,
  }

  return <ReactJson {...dataViewerProps} />
}
