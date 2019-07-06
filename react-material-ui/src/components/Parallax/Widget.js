import React, {useState} from 'react'
import {styles as classes} from './styles'

//temp
// import useMediaQuery from '@material-ui/core/useMediaQuery';

const Widget = ({children, image, style, greyhover}) => {
  // const matches1 = useMediaQuery('(min-width:576px)'); console.log("(min-width:576px) ", matches1)
  // const matches2 = useMediaQuery('(min-width:768px)'); console.log("(min-width:768px) ", matches2)
  // const matches3 = useMediaQuery('(min-width:992px)'); console.log("(min-width:992px) ", matches3)
  // const matches4 = useMediaQuery('(min-width:1200px)'); console.log("(min-width:1200px) ", matches4)

  const [hover, setHover] = useState(false)

  const divProps = !!greyhover ?
    {
      style:{
        ...classes.main,
        ...classes[!hover?"filterHover":"filter"],
        backgroundImage:`url(${image})`,
        ...style
      },
      onMouseOver: () => setHover(true),
      onMouseOut: () => setHover(false),
    } : {
      style:{
        ...classes.main,
        backgroundImage:`url(${image})`,
        ...style
      }
    }

  return (
    <div {...divProps}>
      {children}
    </div>
  )
}

export default Widget
