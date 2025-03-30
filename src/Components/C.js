import React from 'react'
import D from './D';

 function C({name,New3}) {
  return (
    <React.Fragment>
    <h1> {name} </h1>
    <D New3={New3}/>
    </React.Fragment>
  )
}
export default C;
