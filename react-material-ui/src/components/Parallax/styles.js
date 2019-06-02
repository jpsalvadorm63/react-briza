export const styles = {
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
