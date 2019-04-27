import React, {useState} from 'react'

const componentStyles = {
  main: {
    display: "flex",
    margin: "0",
    padding: "8vh 0 8vh 0",
    border: "0",
    minHeight: "90vh",
    maxHeight: "1000px",
    position: "relative",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundColor: 'white',
    WebkitFlex: 1,
    flex: 1,
    alignItems: "center"
  },
  filter: {
    WebkitFilter: "grayscale(100%)",
    filter: "grayscale(100%)",
    WebkitTransition: "0.5s",
    transition: "0.5s"
  },
  filterHover: {
    WebkitFilter: "grayscale(0%)",
    filter: "grayscale(0%)",
    WebkitTransition: "0.5s",
    transition: "0.5s"
  }
}

const Widget = ({children, image, style, greyhover}) => {
  if(!!greyhover) {
    const [hover, setHover] = useState(false)
    return (
      <div
        style={{
          ...componentStyles.main,
          ...componentStyles[!hover?"filterHover":"filter"],
          backgroundImage:`url(${image})`,
          ...style
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >{children}</div>
    )
  } else {
    return (
      <div
        style={{
          ...componentStyles.main,
          backgroundImage:`url(${image})`,
          ...style
        }}
      >{children}</div>
    )
  }
}

export default Widget
