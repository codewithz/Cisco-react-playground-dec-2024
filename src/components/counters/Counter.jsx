import React,{useState} from 'react'

export default function Counter() {
    const [counter]=useState(0)
  return (
    <div>
      <h1>{counter}</h1>
      <button>Increment</button>
    </div>
  )
}
