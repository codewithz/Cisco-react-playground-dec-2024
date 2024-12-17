import React,{useState} from 'react'

export default function Counter() {
    const [counter]=useState(10)

    function formatCount(){
        return counter ===0 ? "Zero" : counter
    }

    function getBadgeClasses(){
        let classes= 'badge m-2 '
        classes+=counter===0?'bg-warning':'bg-primary'
        return classes;
    }

  return (
    <div>
      <h1 className={getBadgeClasses()}>{formatCount()}</h1>
      <button className='btn btn-secondary bnt-sm'>Increment</button>
    </div>
  )
}
