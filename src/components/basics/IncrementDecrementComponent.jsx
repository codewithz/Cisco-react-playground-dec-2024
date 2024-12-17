import React,{useState} from 'react'

export default function IncrementDecrementComponent() {

    const [count,setCount]=useState(0)

    const incrementCount= ()=>{
        setCount(count+1)
    }

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h5>{count}</h5>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
