import React from 'react'

function Heading(props: any) {
  return (
    <h1 className="text-5xl font-semibold">{props.children}</h1>
  )
}

export default Heading