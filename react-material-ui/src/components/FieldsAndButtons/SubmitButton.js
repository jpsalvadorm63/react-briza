import React from 'react'
import Button from '@material-ui/core/Button'

export default ({props}) => (
  <Button variant={'contained'}
          size={'small'}
          classes={{root:props.classes.submit}}
          onClick={
            (e)=> {
              e.preventDefault()
              props.clickFc(props.info)
            }
          }
  >{props.label}</Button>
)
