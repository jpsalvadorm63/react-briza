import React from 'react'
import PropTypes from 'prop-types'
import Parallax from 'src/components/Parallax'
import withStyles from '@material-ui/core/styles/withStyles'
import {componentStyles} from "./componentStyles"
import LoginForm from './LoginForm'
import img from '../App/assets/bg.jpg'
import ProductBrand from "../../components/ProducBrand/ProductBrand"

const SignIn = ({classes}) => {
  const {main, mainRight} = classes
  return (
    <Parallax image={img} style={{minHeight:"410px"}}>
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

export default withStyles(componentStyles)(SignIn)
