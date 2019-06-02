import React from 'react'
import Parallax from 'src/components/Parallax'
import ProductBrand from "src/components/ProducBrand/Widget"
import {bgStyle} from "src/common/api"

export default () => {
  return (
    <Parallax style={bgStyle()}>
      <ProductBrand />
    </Parallax>
  )
}