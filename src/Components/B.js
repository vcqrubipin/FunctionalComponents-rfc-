import React from 'react'
import C from './C'

export default function B({name,newname,New3}) {
  return (
   <React.Fragment>
    <h3> {name}</h3>
    <C name={newname} New3={New3} />
   </React.Fragment>
  )
}
