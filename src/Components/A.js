import React, { useState } from 'react'
import B from './B'

export default function A() {

    const [X,setX]=useState(10);

  return (
    <React.Fragment>
        <h1>This is Paragraph 1  </h1>
        <B name={X} />
    </React.Fragment>
  )
}
