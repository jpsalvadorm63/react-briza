import React from 'react'
import Parallax from 'src/components/Parallax'
import ProductBrand from "src/components/ProductBrand/Widget"
import {bgStyle} from "src/common/api"

export default () => (
  <>
    <Parallax style={bgStyle()}>
      <ProductBrand />
    </Parallax>
  </>
)
