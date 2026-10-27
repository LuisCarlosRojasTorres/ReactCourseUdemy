import React from 'react'

const FunctionAsPropExample = ({myFunc}) => {
  return (
    <div>
      <h2>FunctionAsPropExample</h2>
      <button onClick={myFunc}>Show Message</button>
    </div>
  )
}

export default FunctionAsPropExample