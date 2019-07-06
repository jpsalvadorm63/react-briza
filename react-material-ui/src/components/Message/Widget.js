import React from 'react'
import Grid from "@material-ui/core/Grid"
import {gridProps} from './props'
import {Box} from '@material-ui/core'

export const Message = ({message}) => {
  const errorIndicator = 'ERROR,'
  const isErrorMsg = message.trim().toUpperCase().indexOf(errorIndicator) === 0
  return (
    <>
      <Grid {...gridProps(true)}>
        <Box color={isErrorMsg ? 'error.main': 'text.primary'}>
          {!isErrorMsg ? message : message.substring(errorIndicator.length).trim()}
        </Box>
      </Grid>
    </>
  )
}


