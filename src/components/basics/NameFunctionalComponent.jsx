import React from 'react'

export default function NameFunctionalComponent(props) {
  return (
    <div>
      <h2>Name Functional Component</h2>
      <h3>Name: {props.name}</h3>
      <h4>Message: {props.message}</h4>
    </div>
  )
}
