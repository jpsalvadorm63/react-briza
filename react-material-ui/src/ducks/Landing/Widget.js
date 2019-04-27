import React from 'react'
import Parallax from 'src/components/Parallax'
import img from '../App/assets/bg.jpg'
import ProductBrand from "src/components/ProducBrand/ProductBrand"

export default () => {
  return (
    <Parallax image={img} style={{minHeight:"410px"}}>
      <ProductBrand />
    </Parallax>
  )
}


{/*<Parallax image={img} style={{minHeight:"410px"}}>*/}