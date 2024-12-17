import React,{useState} from 'react'

export default function Counter() {
    const [counter]=useState(0)

    function formatCount(){
        return counter ==0 ? "Zero" : counter
    }

  return (
    <div>
      <h1>{formatCount()}</h1>
      <button>Increment</button>
    </div>
  )
}
