import React from 'react'
import {
  Link
} from 'react-router-dom'
import styles from "./styles"

export const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

export const RGB = ({ match }) => {
  const { params } = match

  return (
    <div style={{
      ...styles.rgb,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}>rgb({params.r}, {params.g}, {params.b})</div>
  )
}

export const HSL = ({ match }) => {
  const { params } = match

  return (
    <div style={{
      ...styles.hsl,
      background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
  )
}
