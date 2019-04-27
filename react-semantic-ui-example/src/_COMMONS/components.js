import React, {useState} from 'react'
import { Label } from 'semantic-ui-react'

export const ErrorLabel = ({name, state}) => {
  if(state.errors[name])
    return (
      <Label basic color="red" size={"tiny"} pointing style={{"marginTop":0}}>
        {state.errors[name]}
      </Label>
    )
  else return null
}
