import React from 'react'
import PropTypes from 'prop-types'
import Parallax from 'src/components/Parallax'
import withStyles from '@material-ui/core/styles/withStyles'
import {styles} from "./styles"
import LoginForm from './components/LoginForm'
import ProductBrand from "src/components/ProducBrand/Widget"
import {bgStyle} from "src/common/api"

const SignIn = ({classes}) => {
  const {main, mainRight} = classes

  return (
    <Parallax style={bgStyle()}>
      <main className={main} >
        <LoginForm />
      </main>
      <main className={mainRight} >
        <ProductBrand />
      </main>
    </Parallax>
  )
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignIn)
