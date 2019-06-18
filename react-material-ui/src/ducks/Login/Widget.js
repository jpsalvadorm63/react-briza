import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Parallax from 'src/components/Parallax'
import ProductBrand from "src/components/ProducBrand/Widget"
import {styles} from "./styles"
import {bgStyle} from "src/common/api"
import LoginForm from './subcomponents/LoginForm/Widget'
import {compose} from "redux"
import {connect} from "react-redux";

const composition = compose(
  connect((state) => ({loggedIn: state.storeGVars.loggedIn})),
  withStyles(styles)
)

export default composition(({classes, history, loggedIn}) => (
    <>
      <Parallax style={bgStyle()}>
        <div className={classes.mainLeft} >
          <LoginForm history={history} loggedIn={loggedIn} />
        </div>
        <div className={classes.mainRight} >
          <ProductBrand />
        </div>
      </Parallax>
    </>
  )
)
