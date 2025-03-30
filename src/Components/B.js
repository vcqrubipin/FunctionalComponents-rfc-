import React from 'react'
import C from './C'

export default function B({name}) {
  return (
   <React.Fragment>
    <h1>This is paragraph 2 {name}</h1>
    <C name={name} />
   </React.Fragment>
  )
}
