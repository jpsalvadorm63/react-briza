const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
}

const container = {
  ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  },
  // fontFamily: '"Roboto","Helvetica","Arial","sans-serif"'
}

export default {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "5.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    textShadow: "-1px -1px 0px rgba(255,255,255,0.3), 1px 1px 2px rgba(0,0,0,0.8)",
    marginBottom: "0"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "0 0 0"
  },
}
